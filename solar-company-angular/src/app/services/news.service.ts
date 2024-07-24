import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../enviroments/environment";
import {catchError, Observable, of, tap, map} from "rxjs";
import {News, NewsList} from "../models/news.model";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url = `${environment.API_URL}/api/v1/news`;

  constructor(private http: HttpClient) { }

  /**
   *  Get all news from the server.
   */
  getAllNews(size?: number, offset?: number): Observable<News[]> {
    const url = size != undefined && offset != undefined ? `${this.url}?size=${size}&offset=${offset}` : this.url;
    return this.http.get<NewsList>(url)
      .pipe(
        map(newsList => newsList.list),
        tap(_ => this.log('fetched news')),
        catchError(this.handleError<News[]>('getAllNews', []))
      );
  }

  /**
   * Get a news by id from server.
   * @param id
   */
  getNews(id: number): Observable<News> {
    const url = `${this.url}/${id}`;
    return this.http.get<News>(url)
      .pipe(
        tap(_ => this.log(`fetched news id=${id}`)),
        catchError(this.handleError<News>(`getNews id=${id}`))
      );
  }

  /**
   * Search news whose title contains the term.
   * @param term
   */
  searchNews(term: string): Observable<News[]> {
    if(!term.trim()) {
      // returning empty news array if there is no search term
      return of([]);
    }
    return this.http.get<NewsList>(this.url)
      .pipe(
        map(newsList => newsList.list),
        map(news => news.filter(n => n.title.search(term) != -1)),
        tap(result => result.length ?
          this.log(`found news matching "${term}"`) :
          this.log(`no news matching "${term}"`)),
        catchError(this.handleError<News[]>('searchNews', []))
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
    console.log(`NewsService ${message}`)
  }

}









