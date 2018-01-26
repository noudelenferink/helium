import { Component, OnInit } from '@angular/core';
import { Category } from '../../../shared/models/category';
import { Player } from '../../../shared/models/player';
import { Team } from '../../../shared/models/team';
import { DummyService } from '../../dummy.service';

@Component({
  selector: 'app-team-generator',
  templateUrl: './team-generator.component.html',
  styleUrls: ['./team-generator.component.css']
})
export class TeamGeneratorComponent implements OnInit {

  teams: Array<Team>;
  numPlayersPerTeam: number;
  showCreatePlayer: boolean;
  newPlayer: Player;
  players: Array<Player>;
  categories: Array<Category>;

  constructor(private dummyService: DummyService) { }

  ngOnInit() {
    this.categories = this.dummyService.getCategories();
    this.players = this.dummyService.getPlayers();

    this.numPlayersPerTeam = 10;
  }

  removePlayer(player: Player) {
    // tslint:disable-next-line:prefer-const
    let playerIndex = this.players.indexOf(player, 0);
    if (playerIndex > -1) {
      this.players.splice(playerIndex, 1);
    }
  }

  createPlayer() {
    this.showCreatePlayer = true;
    this.newPlayer = new Player();
  }

  addPlayer() {
    this.players.push(this.newPlayer);
    this.showCreatePlayer = false;
  }

  cancelCreatePlayer() {
    this.newPlayer = null;
    this.showCreatePlayer = false;
  }

  generateTeams() {
    let numTeams = Math.ceil(this.players.length / this.numPlayersPerTeam);
    console.log('Generating ' + numTeams + ' teams with ' + this.players.length + ' players');
    let playerGroups = this.getPlayerGroups();

    this.generateRandom(numTeams, playerGroups);
  }

  getPlayerGroups() {
    let grouped = Object.values(this.players.reduce((result, player) => {
      // Create new group
      if (!result[player.Category.Id]) {
        result[player.Category.Id] = {
          categoryId: player.Category.Id,
          players: []
        };
      }
      // Append to group
      result[player.Category.Id].players.push(player);
      return result;
    }, {}));

    return grouped;
  }

  generateRandom(numTeams: number, playerGroups: any[]): any {
    this.teams = new Array<Team>(numTeams);
    let teamIterator = 0;
    playerGroups.forEach(group => {
      let players = group.players.slice(0);
      while (players.length > 0) {
          let randomIndex = Math.floor(Math.random() * players.length);
          if (!this.teams[teamIterator]) {
            this.teams[teamIterator] = new Team();
            this.teams[teamIterator].Players = new Array<Player>();
          }

          this.teams[teamIterator].Players.push(players[randomIndex]);
          players.splice(randomIndex, 1);

          teamIterator++;
          if (teamIterator === numTeams) {
            teamIterator = 0;
          }
      }
    });
  }
}
