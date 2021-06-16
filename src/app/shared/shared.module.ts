import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { InfoProductComponent } from './info-product/info-product.component';
import { AddProductComponent } from './add-product/add-product.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ShopingListComponent,
    InfoProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
