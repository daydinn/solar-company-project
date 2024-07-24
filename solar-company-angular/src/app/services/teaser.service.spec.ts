import { TestBed } from '@angular/core/testing';

import { TeaserService } from './teaser.service';
import {HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Teaser} from "../models/teaser.model";
import {SINGLE_TEASER, SPOTLIGHT_TEASERS, TEASERS} from "../mock/teaser.mock";

describe('TeaserService', () => {
  let service: TeaserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        TeaserService
      ]
    });
    service = TestBed.inject(TeaserService);
  });

  it('should be created service', () => {
    expect(service).toBeTruthy();
  });

  it('getAllTeasers should return expected teasers', (done) => {
    // Given
    const expectedTeasers: Teaser[] = TEASERS;

    // When
    const result: Observable<Teaser[]> = service.getAllTeasers();

    // Then
    result.subscribe(teasers => {
      expect(teasers)
        .withContext('expected teaser length')
        .toHaveSize(expectedTeasers.length);
      expect(teasers)
        .withContext('expected teaser')
        .toEqual(expectedTeasers);
      done();
    });
  });

  it('getAllTeasers spotlight=true should return expected teasers', (done) => {
    // Given
    const expectedTeasers: Teaser[] = SPOTLIGHT_TEASERS;

    // When
    const result: Observable<Teaser[]> = service.getAllTeasers(true);

    // Then
    result.subscribe(teasers => {
      expect(teasers)
        .withContext('expected teaser length')
        .toHaveSize(expectedTeasers.length);
      expect(teasers)
        .withContext('expected teaser')
        .toEqual(expectedTeasers);
      done();
    });
  });

  it('getTease id=page12345 should return expected teaser', (done) => {
    // Given
    const expectedTeaser: Teaser = SINGLE_TEASER;

    // When
    const result: Observable<Teaser> = service.getTeaser('page12345');

    // Then
    result.subscribe(teaser => {
      expect(teaser)
        .withContext('expected teaser')
        .toEqual(expectedTeaser);
      done();
    });
  });
});
