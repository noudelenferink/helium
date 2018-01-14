import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentListComponent } from './tournament-manager-module/components/tournament-list/tournament-list.component';
import { TeamGeneratorComponent } from './tournament-manager-module/components/team-generator/team-generator.component';

const appRoutes: Routes = [
    {path: '', component: TeamGeneratorComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
