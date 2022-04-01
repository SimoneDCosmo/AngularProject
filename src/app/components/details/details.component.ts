import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/shared/components/card/interfaces/Game';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  gameId ?: string;
  game$  ?: Observable<Game>;
  
  constructor(
    private gameService: GamesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.gameId = params['id'];
      if (this.gameId){
      this.game$ = this.gameService.getDetails(this.gameId);
    }
    })
    

  }

}
