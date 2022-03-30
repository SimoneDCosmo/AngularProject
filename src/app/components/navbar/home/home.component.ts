import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/shared/components/card/interfaces/Card';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title= '';

  constructor(public GamesService: GamesService) { }

  ngOnInit(): void {}

  getTitle(){
    return this.title;
  }
}
