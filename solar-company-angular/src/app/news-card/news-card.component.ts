import {Component, Input} from '@angular/core';
import { News } from '../models/news.model';
import {environment} from "../enviroments/environment";



@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})


export class NewsCardComponent {

  @Input() orientation?: 'horizontal' | 'vertical';

  @Input() news?: News;

  url = environment.API_URL;

}
