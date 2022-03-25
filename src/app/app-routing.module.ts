import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentsComponent } from './components/navbar/assignments/assignments.component';
import { GamersComponent } from './components/navbar/gamers/gamers.component';
import { HomeComponent } from './components/navbar/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = 
[
  {
    path : 'home', component: HomeComponent,
  },
  {
    path : 'game', component: GamersComponent,
  },
  {
    path : 'assignments', component: AssignmentsComponent,
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  },
  {
    path : '**', component: NotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
