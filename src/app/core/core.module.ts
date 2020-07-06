import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule
  ],
  exports: [HomeComponent]
})
export class CoreModule { }
