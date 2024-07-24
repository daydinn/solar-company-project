import {Component, Input} from '@angular/core';
import {News} from "../models/news.model";
import {NewsService} from "../services/news.service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {
  news : News[] = [];

  private size: number = 7;

  private offset: number = 0;

  @Input() buttonOutline: boolean = false;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.fetchAllNews();
  }

  fetchAllNews(): void {
    this.newsService.getAllNews(this.size, this.offset)
      .subscribe(news => this.news = this.news.concat(news));
  }

  fetchMoreNews() {
    this.offset = this.size;
    this.size = 3;
    this.fetchAllNews();
  }

}
