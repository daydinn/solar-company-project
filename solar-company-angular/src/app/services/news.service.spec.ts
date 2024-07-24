import { TestBed } from '@angular/core/testing';

import { NewsService } from './news.service';
import {News} from "../models/news.model";
import {MORE_NEWS, NEWS, SINGLE_NEWS} from "../mock/news.mock";
import {Observable} from "rxjs";
import {HttpClientModule} from "@angular/common/http";

describe('NewsService', () => {
  let service: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        NewsService
      ]
    });
    service = TestBed.inject(NewsService);
  });

  it('should be created service', () => {
    expect(service).toBeTruthy();
  });

  it('getAllNews size=7 offset=0 should return expected news', (done) => {
    // Given
    const expectedNews: News[] = NEWS;

    // When
    const result: Observable<News[]> = service.getAllNews(7, 0);

    // Then
    result.subscribe(news => {
      expect(news)
        .withContext('expected news length')
        .toHaveSize(expectedNews.length);
      expect(news)
        .withContext('expected news')
        .toEqual(expectedNews);
      done();
    });
  });

  it('getAllNews size=3 offset=7 should return expected news', (done) => {
    // Given
    const expectedNews: News[] = MORE_NEWS;

    // When
    const result: Observable<News[]> = service.getAllNews(3, 7);

    // Then
    result.subscribe(news => {
      expect(news)
        .withContext('expected news length')
        .toHaveSize(expectedNews.length);
      expect(news)
        .withContext('expected news')
        .toEqual(expectedNews);
      done();
    });
  });

  it('getNews id=123 should return expected news', (done) => {
    // Given
    const expectedNews: News = SINGLE_NEWS;

    // When
    const result: Observable<News> = service.getNews(123);

    // Then
    result.subscribe(news => {
      expect(news)
        .withContext('expected news')
        .toEqual(expectedNews);
      done();
    });
  });
});
