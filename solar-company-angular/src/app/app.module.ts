import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsListComponent } from './news-list/news-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBoxComponent,
    NewsCardComponent,
    NewsDetailComponent,
    InfoBoxComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    NewsPageComponent,
    NewsListComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
