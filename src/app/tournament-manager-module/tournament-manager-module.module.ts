import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialWrapperModuleModule } from '../material-wrapper-module/material-wrapper-module.module';
import { TournamentListComponent } from './components/tournament-list/tournament-list.component';
import { TeamGeneratorComponent } from './components/team-generator/team-generator.component';
import { TournamentGeneratorComponent } from './components/tournament-generator/tournament-generator.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SortObjectPipe } from '../sort-object.pipe';
import { DummyService } from './dummy.service';
import { RankPipe } from '../rank.pipe';
@NgModule({
  imports: [
    CommonModule,
    MaterialWrapperModuleModule,
    FormsModule,
    FlexLayoutModule
  ],
  declarations: [
    TournamentListComponent, 
    TeamGeneratorComponent, 
    TournamentGeneratorComponent,
    SortObjectPipe,
    RankPipe
  ],
  providers: [
    DummyService
  ]
})
export class TournamentManagerModuleModule { }
