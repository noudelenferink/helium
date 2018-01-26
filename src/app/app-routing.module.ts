import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentListComponent } from './tournament-manager-module/components/tournament-list/tournament-list.component';
import { TeamGeneratorComponent } from './tournament-manager-module/components/team-generator/team-generator.component';
import { TournamentGeneratorComponent } from './tournament-manager-module/components/tournament-generator/tournament-generator.component';

const appRoutes: Routes = [
    { path: 'generate-teams', component: TeamGeneratorComponent },
    { path: 'generate-tournament', component: TournamentGeneratorComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
