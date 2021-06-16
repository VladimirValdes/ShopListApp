import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreListComponent } from './pre-list/pre-list.component';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    PreListComponent,
    ListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
