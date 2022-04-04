import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Prova } from './prova/prova.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GamersComponent } from './components/navbar/gamers/gamers.component';
import { AssignmentsComponent } from './components/navbar/assignments/assignments.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/navbar/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { CardComponent } from './shared/components/card/card.component';
import { TictactoeComponent } from './components/navbar/assignments/tictactoe/tictactoe.component';
import { CellComponent } from './components/navbar/assignments/tictactoe/cell/cell.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GamesInterceptor } from './interceptors/games.interceptor';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    Prova,
    NavbarComponent,
     HomeComponent,
     GamersComponent,
     AssignmentsComponent,
     NotfoundComponent,
     AlertComponent,
     CardComponent,
     TictactoeComponent,
     CellComponent,
     DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GamesInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
