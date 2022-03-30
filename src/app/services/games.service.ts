import { Injectable } from '@angular/core';
import { Game } from '../shared/components/card/interfaces/Card';

@Injectable({
  providedIn: 'root'
})
export class GamesService {


  gamers : Game[] = 
  [
  {
    title : "GTA",
    img : 'src/assets/images/10415.png',
    releaseDate : "2013",
    platforms : []
  },
  {
    title : "COD Warzone",
    img : "",
    releaseDate : "2022",
    platforms : []
  },
  {
    title : "Fortinait",
    img : "",
    releaseDate : "2019",
    platforms : []
  },
  {
    title : "Pabagi",
    img : "",
    releaseDate : "2015",
    platforms : []
  }
  ]

  constructor() { }

  getList() {
    return this.gamers;
  }
}
