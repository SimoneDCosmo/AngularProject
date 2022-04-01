import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GamesInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': '6e949e4146msh0daf85b0d1d57ccp17375fjsn943c71d264ef'
      },
      setParams: {
        key: '6af8cf0e0b8b4d0fa9c720a08544c92e'
      }
    });

    return next.handle(request);
  }
}
