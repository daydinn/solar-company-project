import { Component } from '@angular/core';
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {News} from "../models/news.model";
import {NewsService} from "../services/news.service";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  // Observable news
  news$?: Observable<News[]>;

  // Observable stream
  private searchTerms = new Subject<string>();

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    // Pipes the observable search terms through a sequence of RxJS operators that reduce the number of calls to the search service.
    // returns an observable of timely news search results where each one is a News[].
    this.news$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.newsService.searchNews(term)),
    );
  }

  /**
   * Push a search term value into the observable stream.
   * @param term
   */
  search(term: string): void {
    // emitting a steady stream of search terms
    this.searchTerms.next(term);
  }

}
