import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, shareReplay, skip, Subject, switchMap, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Gamer } from '../models/gamers';

@Injectable({
  providedIn: 'root'
})
export class GamerService {

  all$: Observable<Gamer[]>;
  private refresh$: Subject<boolean>;

  constructor(private http: HttpClient) {
    this.refresh$ = new BehaviorSubject<boolean>(true); // rimaniamo in ascolto di questa lista
    this.all$ = this.refresh$.pipe(
      switchMap(() => this.http.get<Record<string, Gamer>>(`${environment.FIREBASE_URL}/gamers.json`)), //LO SWITCHMAP SERVE A CAMBIARE L'INPUT E OUTPUT, AVREMO IN INPUT UN BOOLEAN E IN OUTPUT IN RECORD STRING GAMER
      switchMap (resData => {
        const gamerArray: Gamer[] = [];
        for (const key in resData){
          if (resData.hasOwnProperty(key)){ // controllo se l'id esiste ed è un oggeto di tipo Gamer
            gamerArray.push({...resData[key], id: key,}); // inserirsco oltre l'id tutti parametri di tipo Gamer
          }
        }
        return of(gamerArray);
      }),
      tap({
       next: (result) => console.log('all$', result),
       error: (err) => console.error('all$', err),
      }),
      shareReplay(1)
    );
  }

  createGamer(gamer: Gamer): Observable<Gamer[]> {
    return this.http.post(`${environment.FIREBASE_URL}/gamers.json`,
    gamer,{
      observe: 'response'
    }).pipe(take(1), switchMap(() => this.refresh()));
  }

  updateGamer(gamer: Gamer): Observable<Gamer[]> {
    return this.http
    .put(`${environment.FIREBASE_URL}/gamers/${gamer.id}.json`, gamer)
    .pipe(
      take(1),
      switchMap(() => this.refresh())
    )
  }


  deleteGamer(gamerId: string): Observable<Gamer[]> {
    return this.http.delete(`${environment.FIREBASE_URL}/gamers/${gamerId}.json`).pipe(take(1), switchMap(() => this.refresh()));
  }

  refresh(): Observable<Gamer[]> {
    console.log('refresh gamers');
    this.refresh$.next(true); 

    return this.all$.pipe(
      skip(1),
      take(1)
    );
  }
}