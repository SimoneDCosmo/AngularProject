import { Component, Input, OnInit } from '@angular/core';
import { Game } from './interfaces/Game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  @Input() game !: Game;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openGameDetails (id: string) {
      alert("ciao");
      this.router.navigate(['details', id]);
  }

}
