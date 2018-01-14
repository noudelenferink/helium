import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaterialWrapperModuleModule } from './material-wrapper-module/material-wrapper-module.module';
import { AppRoutingModule } from './app-routing.module';
import { TournamentManagerModuleModule } from './tournament-manager-module/tournament-manager-module.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialWrapperModuleModule,
    TournamentManagerModuleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
