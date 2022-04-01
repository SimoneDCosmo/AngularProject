import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/shared/components/card/interfaces/Game';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title= '';
  public games: Array<Game> = [] ;
  // public games2: Array<Game> = [];
  private sort = "metacrit";
  private search?: string;
  private routeSub ?: Subscription;
  private gameSub ?: Subscription;


  constructor(private GamesService: GamesService, private ActivatedRoute: ActivatedRoute) { }



  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe(params => {
      this.search = params['game-search'];
      if (this.search) {
        this.searchGame(this.sort, this.search);
      }else{
        this.searchGame(this.sort);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  getTitle(){
    return this.title;
  }

  searchGame(sort: string, search?: string) {
    this.gameSub = this.GamesService.getList2(sort, search).subscribe(gameList => {
      this.games = gameList.results;
    });
  }


  onSelectChange (event: any) {
    this.sort = event.target.value;
    this.searchGame(this.sort);
  }
}
