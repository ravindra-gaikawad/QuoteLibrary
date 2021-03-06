import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Quote } from './models/quote';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private baseUrl = 'https://localhost:5001/api/';  // URL to web api
  private quotesUrl = 'quotes';  // URL to web api

  constructor(private http: HttpClient) { }
  
  /** GET quotes from the server */
  getQuotes (authorId: number): Observable<Quote[]> {
    console.log(`${this.baseUrl}/authors/${authorId}/quotes`)
    return this.http.get<Quote[]>(`${this.baseUrl}authors/${authorId}/quotes`)
      .pipe(
        tap(_ => this.log('fetched quotes')),
        catchError(this.handleError('getQuotes', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('Error:' + message)
  }

}
