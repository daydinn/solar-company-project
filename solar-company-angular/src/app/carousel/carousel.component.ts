import { Component } from '@angular/core';
import {TeaserService} from "../services/teaser.service";
import {Teaser} from "../models/teaser.model";
import {environment} from "../enviroments/environment";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  env = environment;

  teasers: Teaser [] = [];

  constructor(private teaserService: TeaserService){}

  ngOnInit(): void {
    this.getTeasers();
  }

  getTeasers() : void {
    this.teaserService.getAllTeasers()
      .subscribe(teasers => this.teasers =
        teasers.filter(teaser => teaser.spotlight));
  }

}
