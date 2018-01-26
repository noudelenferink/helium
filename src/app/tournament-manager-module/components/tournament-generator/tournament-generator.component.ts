import { Component, OnInit } from '@angular/core';
import { Team } from '../../../shared/models/team';
import { TournamentType } from '../../../shared/models/tournament-type';
import { TournamentGroup } from '../../../shared/models/tournament-group';
import { TournamentMatch } from '../../../shared/models/tournament-match';
import { RankPipe } from '../../../rank.pipe';
import { KnockoutInfo } from '../../../shared/models/knockout-info';

@Component({
  selector: 'app-tournament-generator',
  templateUrl: './tournament-generator.component.html',
  styleUrls: ['./tournament-generator.component.css']
})
export class TournamentGeneratorComponent implements OnInit {
  teamNameToAdd: string;
  teams: Array<Team>;
  tournamentTypes: Array<TournamentType>;
  tournamentTypeId: number;
  groups: Array<TournamentGroup>;
  numberOfGroups: number;
  teamsInKnockoutPhase: number;
  tournamentMatches: Array<TournamentMatch>;
  constructor() { }

  ngOnInit() {
    this.teams = new Array<Team>();
    this.resetTeamNameToAdd();

    this.tournamentTypes = [
      new TournamentType({ Id: 1, Name: 'Group phase + knockout' }),
      new TournamentType({ Id: 2, Name: 'Group phase' }),
      new TournamentType({ Id: 3, Name: 'Knockout' })
    ];

    this.numberOfGroups = 1;
  }

  addTeam() {
    if (this.teamNameToAdd) {
      const newTeam = new Team({ Id: this.teams.length, Name: this.teamNameToAdd });
      this.teams.push(newTeam);
      this.resetTeamNameToAdd();
    }
  }

  resetTeamNameToAdd(): any {
    this.teamNameToAdd = 'Team ' + (this.teams.length + 1);
  }

  getMaxGroups() {
    return Math.max(Math.floor(this.teams.length / 2), 1);
  }

  generateGroups() {
    this.groups = new Array<TournamentGroup>(this.numberOfGroups);
    let groupIterator = 0;
    let teams = this.teams.slice(0);
    while (teams.length > 0) {
      let randomIndex = Math.floor(Math.random() * teams.length);
      if (!this.groups[groupIterator]) {
        this.groups[groupIterator] = new TournamentGroup();
        this.groups[groupIterator].Name = String.fromCharCode(65 + groupIterator);
        this.groups[groupIterator].Teams = new Array<Team>();
      }

      this.groups[groupIterator].Teams.push(teams[randomIndex]);
      teams.splice(randomIndex, 1);

      groupIterator++;
      if (groupIterator === this.numberOfGroups) {
        groupIterator = 0;
      }
    }
  }

  generateMatches() {
    this.tournamentMatches = new Array<TournamentMatch>();
    if (this.tournamentTypeId === 1 || this.tournamentTypeId === 2) {
      this.generateGroupPhaseMatches();
      //this.generateKnockoutPhaseMatches();
      this.knockout();
    }
  }

  isExistingMatch(matches: Array<TournamentMatch>, team1: Team, team2: Team) {
    return matches.filter(m =>
      (m.HomeTeam.Id === team1.Id && m.AwayTeam.Id === team2.Id) ||
      (m.HomeTeam.Id === team2.Id && m.AwayTeam.Id === team1.Id)
    ).length > 0;
  }

  generateGroupPhaseMatches(): any {
    this.groups.forEach(g => {
      let matchesToAdd = new Array<TournamentMatch>();
      g.Teams.forEach(t => {
        let otherTeams = g.Teams.filter(ot => ot.Id !== t.Id);
        otherTeams.forEach(ot => {
          if (this.isExistingMatch(matchesToAdd, t, ot)) {
            return;
          }

          let newMatch = new TournamentMatch();
          let homeMatch = Math.random() * 2 > 1;
          if (homeMatch) {
            newMatch.HomeTeam = t;
            newMatch.AwayTeam = ot;
          } else {
            newMatch.HomeTeam = ot;
            newMatch.AwayTeam = t;
          }
          matchesToAdd.push(newMatch);
        });
      });
      Array.prototype.push.apply(this.tournamentMatches, matchesToAdd);
    });
  }

  knockout() {
    let numTeams = this.teamsInKnockoutPhase;
    let numRounds = Math.log(numTeams) / Math.log(2);
    for (let currRound = 1; currRound <= numRounds; currRound++) {
      console.log('Round ' + (numRounds + 1 - currRound) + ' with ' + Math.pow(2, currRound) + ' matches');
    }
  }

  generateKnockoutPhaseMatches() {
    let rankPipe = new RankPipe();
    let knockoutInfo = new Array<KnockoutInfo>();
    let teamsPerGroup = this.teamsInKnockoutPhase / this.numberOfGroups;
    let pos = 1;
    let rank = 1;
    for (pos; pos <= Math.floor(teamsPerGroup); pos++) {
      this.groups.forEach(g => {
        let kni = new KnockoutInfo({
          Id: knockoutInfo.length,
          Name: 'Pos. ' + pos + ' group ' + g.Name,
          GroupPosition: pos,
          Group: g,
          RoundNumber: 1,
          Rank: rank
        });
        knockoutInfo.push(kni);
      });
    }

    while (knockoutInfo.length < this.teamsInKnockoutPhase) {
      knockoutInfo.push(new KnockoutInfo({
        Id: knockoutInfo.length,
        Name: rankPipe.transform(rank) + ' at pos ' + pos,
        GroupPosition: pos,
        Rank: rank++,
        RoundNumber: 1
      }));
    }
    console.log('First knockout round', knockoutInfo);
    knockoutInfo = this.generateNextKnockoutRound(knockoutInfo);
    console.log('Incl. next knockout round', knockoutInfo);
  }

  generateNextKnockoutRound(knockoutInfo: Array<KnockoutInfo>): any {
    let roundNumber = Math.max.apply(Math, knockoutInfo.map(k => k.RoundNumber));
    let numRemainingTeams = knockoutInfo.length;
    let workingSet = knockoutInfo.slice(0);
    while (numRemainingTeams >= 2) {
      for (let i = 0; i < (numRemainingTeams / 2); i++) {
        let lowestGroupPos = Math.min.apply(Math, workingSet.map(function (o) { return o.GroupPosition; }));
        let lowests = workingSet.filter(k => k.GroupPosition === lowestGroupPos);
        if (lowests.length > 1) {
          lowests = lowests.filter(l => l.Rank === Math.min.apply(Math, lowests.map(k => k.Rank)));
        }
        let lowest = lowests.shift();
        workingSet.splice(workingSet.indexOf(lowest), 1);
        let highestGroupPos = Math.max.apply(Math, workingSet.map(function (o) { return o.GroupPosition; }));
        let higests = workingSet.filter(k => k.GroupPosition === highestGroupPos);
        if (higests.length > 1) {
          higests = higests.filter(h => h.Rank === Math.max.apply(Math, higests.map(k => k.Rank)));
        }
        let highest = higests[0];
        workingSet.splice(workingSet.indexOf(highest), 1);
        console.log(lowest, highest);
        let newKnockout = new KnockoutInfo({
          Id: knockoutInfo.length,
          RoundNumber: roundNumber++
        });
        knockoutInfo.push(newKnockout);
        knockoutInfo.find(k => k === highest).NextKnockout = newKnockout;
        knockoutInfo.find(k => k === lowest).NextKnockout = newKnockout;
        numRemainingTeams /= 2;
      }
    }

    return knockoutInfo;
  }

  setDummyData() {
    this.teams = new Array<Team>(
      new Team({ Id: 0, Name: 'Team 1' }),
      new Team({ Id: 1, Name: 'Team 2' }),
      new Team({ Id: 2, Name: 'Team 3' }),
      new Team({ Id: 3, Name: 'Team 4' }),
      new Team({ Id: 4, Name: 'Team 5' }),
      new Team({ Id: 5, Name: 'Team 6' }),
    );

    this.resetTeamNameToAdd();
    this.tournamentTypeId = 1;
    this.numberOfGroups = 3;
    this.teamsInKnockoutPhase = 4;
    this.generateGroups();
  }
}
