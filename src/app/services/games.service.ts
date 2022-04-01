import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { forkJoin, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../models/apiResponse';
import { Game } from '../shared/components/card/interfaces/Game';

export const GAME_FOR_PAGE = 12;

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) {

   }

  getList2(page: number,ordering: string, search?: string): Observable<APIResponse<Game>> { //array da un db
    let params = new HttpParams().set('ordering', ordering).set('page',page).set('page_size', GAME_FOR_PAGE);

    if (search)
    {
      params = new HttpParams().set('ordering', ordering).set('search', search).set('page', page).set('page_size', GAME_FOR_PAGE);
      
    }

    return this.http.get<APIResponse<Game>>(`${environment.BASE_URL}/games`, {
      params
    });
  }
  
getDetails(id: string){
  const gameInfoRequest = this.http.get(`${environment.BASE_URL}/games/${id}`);
    const gameScreenshotsRequest = this.http.get(`${environment.BASE_URL}/games/${id}/screenshots`);
    const gameTrailersRequest = this.http.get(`${environment.BASE_URL}/games/${id}/movies`);

  return forkJoin({
    gameInfoRequest,
    gameScreenshotsRequest,
    gameTrailersRequest
  }).pipe(
map((resp:any) => {
  return {
    ...resp.gameInfoRequest
  }
}))
}
  
  // getList() { //array statico
  //   return this.gamers;
  // }
}
