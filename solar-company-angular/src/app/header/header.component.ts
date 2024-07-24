import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

import {PageNavigation} from "../models/page.model";
import {PageService} from "../services/page.service";
import {filter, map, Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navigation: PageNavigation[] = [];

  routerSub: Subscription = Subscription.EMPTY;

  activeUrl?: string;

  buttonState: boolean = false;

  constructor(
    private router: Router,
    private pageService: PageService) { }

  ngOnInit(): void {
    this.fetchPageNavigation();

    this.routerSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => event as NavigationEnd)
    ).subscribe(event => this.activeUrl = event.url);
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

  fetchPageNavigation(): void {
    this.pageService.getPageTree()
      .subscribe(pageTree => this.navigation = pageTree.navigation);
  }

}
