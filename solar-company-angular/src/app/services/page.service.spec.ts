import {TestBed} from '@angular/core/testing';
import {PageService} from './page.service';
import {Observable} from "rxjs";
import {Page, PageTree} from "../models/page.model";
import {PAGE_HOME, PAGE_TREE} from "../mock/page.mock";
import {HttpClientModule} from "@angular/common/http";

describe('PagesService', () => {
  let service: PageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        PageService
      ]
    });
    service = TestBed.inject(PageService);
  });

  it('should be created service', () => {
    expect(service).toBeTruthy();
  });

  it('getPage id=home should return expected page', (done) => {
    // Given
    const expectedPage: Page = PAGE_HOME;

    // When
    const result: Observable<Page> = service.getPage("home");

    // Then
    result.subscribe(page => {
      expect(page)
        .withContext('expected page')
        .toEqual(expectedPage);
      done();
    });
  });

  it('getPageTree should return expected page tree', (done) => {
    // Given
    const expectedPageTree: PageTree = PAGE_TREE;

    // When
    const result: Observable<PageTree> = service.getPageTree();

    // Then
    result.subscribe(pageTree => {
      expect(pageTree)
        .withContext('expected page tree')
        .toEqual(expectedPageTree);
      done();
    });
  });

  it('getPages id=home should return expected page', (done) => {
    // Given
    const expectedPage: Page = PAGE_HOME;

    // When
    const result: Observable<Page> = service.getPage("home");

    // Then
    result.subscribe(page => {
      expect(page)
        .withContext('expected page')
        .toEqual(expectedPage);
      done();
    });
  });

});
