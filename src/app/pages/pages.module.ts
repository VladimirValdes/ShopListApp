import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products/products.component';
import { HistoryComponent } from './history/history.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    ProductsComponent,
    HistoryComponent,
    StatisticsComponent,
    PagesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
