import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map, Subscription } from 'rxjs';
import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/shared/components/card/interfaces/Game';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = '';
  public games: Array<Game> = [];
  // public games2: Array<Game> = [];
  private sort = "metacrit";
  private search?: string;
  private routeSub?: Subscription;
  private gameSub?: Subscription;
  public currentPage: number = 1;


  constructor(
    private router: Router,
    private GamesService: GamesService,
    private ActivatedRoute: ActivatedRoute
  ) { }



  ngOnInit(): void {
    const routeParams$ = this.ActivatedRoute.params;
    const queryParams$ = this.ActivatedRoute.queryParams;

    combineLatest([ routeParams$, queryParams$])
    .pipe(
      map(([routeParams, queryParams]) => {
        this.search = routeParams['game-search'];
        this.sort = queryParams['sort'];
        this.currentPage = queryParams['page'] > 0 ? queryParams['page'] : 1;
      })
    )
    .subscribe(() => this.searchGame())

    // this.routeSub = routeParams$.subscribe(params => {
    //   this.search = params['game-search'];
    //   this.searchGame();
    // });
    // queryParams$.subscribe(params => {
    //    this.sort = params['sort'];
    //    this.searchGame();
    // });
  }

  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  getTitle() {
    return this.title;
  }

  searchGame() {
    this.gameSub = this.GamesService.getList2(this.currentPage, this.sort, this.search).subscribe(gameList => {
      this.games = gameList.results;
    });
  }


  onSelectChange(event: any) {

    this.router.navigate([],
      {
        relativeTo: this.ActivatedRoute,
        queryParams: { sort: event.target.value },
        queryParamsHandling: 'merge'
      });

  }

  onPrev() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.navigateToPage();
    }else {
      alert ("pagina non esistente");
    }
    
  }

  onNext() {
    this.currentPage++;
    this.navigateToPage();
  }


  navigateToPage() {
    this.router.navigate([], {
      relativeTo: this.ActivatedRoute,
      queryParams: {page: this.currentPage},
      queryParamsHandling: 'merge'
    })
  }
}
