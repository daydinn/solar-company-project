import { Component } from '@angular/core';
import {PageService} from "../services/page.service";
import {PageContent} from "../models/page.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  pageContent: PageContent[] = [];

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.fetchPageContent();
  }

  fetchPageContent() {
    this.pageService.getPage('home')
      .subscribe(page => this.pageContent = page.content);
  }

}
