import { Injectable } from '@angular/core';
import {environment} from "../enviroments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Page, PageTree} from "../models/page.model";


@Injectable({
  providedIn: 'root'
})
export class PageService {

  private pageUrl = `${environment.API_URL}/api/v1/page`;
  private treeUrl = `${environment.API_URL}/api/v1/tree`;

  constructor(private http: HttpClient) { }

  /**
   * Get a page by id from server.
   * @param id
   */
  getPage(id: string): Observable<Page> {
    const url = `${this.pageUrl}/${id}`;
    return this.http.get<Page>(url)
      .pipe(
        tap(_ => this.log(`fetched page id=${id}`)),
        catchError(this.handleError<Page>(`getPage id=${id}`))
      );
  }

  /**
   * Get page tree from server.
   */
  getPageTree(): Observable<PageTree> {
    return this.http.get<PageTree>(this.treeUrl)
      .pipe(
        tap(_ => this.log('fetched page tree')),
        catchError(this.handleError<PageTree>('getPageTree'))
      );
  }

  /**
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
    console.log(`PageService ${message}`)
  }

}
