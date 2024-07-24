import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NewsDetailComponent} from "./news-detail/news-detail.component";
import {NewsPageComponent} from "./news-page/news-page.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'news/:id', component: NewsDetailComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
