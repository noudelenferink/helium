import { Component, OnInit } from '@angular/core';
import { TournamentListItem } from '../../../shared/models/tournament-list-item';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css']
})
export class TournamentListComponent implements OnInit {
  tournaments: Array<TournamentListItem>;
  loadTournaments() {
    this.tournaments = [new TournamentListItem({Id: 1, Name: 'Tournament 1'})];
  }

  constructor() { }

  ngOnInit() {
    this.loadTournaments();
  }

}
