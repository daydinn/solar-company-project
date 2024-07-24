import {Injectable} from '@angular/core';
import {environment} from "../enviroments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Teaser} from "../models/teaser.model";

@Injectable({
  providedIn: 'root'
})
export class TeaserService {

  private url = `${environment.API_URL}/api/v1/teaser`;

  constructor(private http: HttpClient
  ) {
  }

  /**
   *  Get all teaser from the server.
   */
  getAllTeasers(spotlight?: boolean): Observable<Teaser[]> {
    const url = spotlight ? `${this.url}?spotlight=${spotlight}` : this.url;
    return this.http.get<Teaser[]>(url)
      .pipe(
        tap(_ => this.log('fetched teasers')),
        catchError(this.handleError<Teaser[]>('getAllTeasers', []))
      );
  }

  /**
   * Get a teaser by id from server.
   * @param id
   */
  getTeaser(id: string): Observable<Teaser> {
    const url = `${this.url}/${id}`;
    return this.http.get<Teaser>(url)
      .pipe(
        tap(_ => this.log(`fetched teaser id=${id}`)),
        catchError(this.handleError<Teaser>(`getTeaser id=${id}`))
      );
  }

  /*
  * Log a Handle Http operation that failed.
  * @param operation - name of the operation that failed
  * @param result - optional value to return observable result
  * @private
  */
  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      // log to console
      console.error(error);

      // log with MessageService
      this.log(`${operation} failed on '${error.url}'`)

      // returning an empty result
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`TeaserService ${message}`)
  }

}
