import { Component } from '@angular/core';
import {NewsService} from "../services/news.service";
import {News} from "../models/news.model";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../enviroments/environment";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent {

  env = environment;

  news?: News;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService) { }


  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.newsService.getNews(id)
      .subscribe(news => this.news = news);
  }

}
