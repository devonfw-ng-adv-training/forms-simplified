import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [OrderComponent],
  imports: [
    SharedModule
  ]
})
export class OrderModule { }
