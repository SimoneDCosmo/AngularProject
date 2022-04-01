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
    path : 'search/:game-search',
    component : HomeComponent,
  },
  { path: 'details', loadChildren: () => import('./components/details/details.module').then(m => m.DetailsModule) },
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
