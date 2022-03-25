import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Prova } from './prova/prova.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GamersComponent } from './components/navbar/gamers/gamers.component';
import { AssignmentsComponent } from './components/navbar/assignments/assignments.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/navbar/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AlertSuccessComponent } from './shared/components/alert-success/alert-success.component';
import { AlertDangerComponent } from './shared/components/alert-danger/alert-danger.component';
import { AlertComponent } from './shared/components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    Prova,
    NavbarComponent,
     HomeComponent,
     GamersComponent,
     AssignmentsComponent,
     NotfoundComponent,
     AlertSuccessComponent,
     AlertDangerComponent,
     AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
