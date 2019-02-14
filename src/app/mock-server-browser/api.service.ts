import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private currentUser: any; log = (...args) => {};

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
  }

  showArticle(slug): Observable<HttpResponse<any>> {
    return this.http
      .get<any>('https://draftr.com/api/' + 'articles/' + 'playing-for-greatness', {observe: 'response'})
      .pipe(
        tap(res => {
          this.log(`fetched status for edit article`);
          // this.setUserToken(res.headers.get('access-token'), res.headers.get('client'));
          return res;
        }),
        // catchError(this.handleError<any>(`fetch status for game`))
      );
  }
}
