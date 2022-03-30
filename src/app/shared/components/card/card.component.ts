import { Component, Input, OnInit } from '@angular/core';
import { Game } from './interfaces/Card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  @Input() cards!: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
