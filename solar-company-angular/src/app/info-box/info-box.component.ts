import {Component} from '@angular/core';
import {TeaserService} from "../services/teaser.service";
import {Teaser} from "../models/teaser.model";

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent {
  teasers: Teaser [] = [];

  constructor(private teaserService: TeaserService){}

  ngOnInit(): void {
    this.getTeasers();
  }

  getTeasers() : void {
    this.teaserService.getAllTeasers()
      .subscribe(teasers => {
        this.teasers = teasers.filter(teaser => !teaser.spotlight)
      });
  }

}
