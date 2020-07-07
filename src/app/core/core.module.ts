import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [HomeComponent, NavigationComponent],
  imports: [
    SharedModule
  ],
  exports: [HomeComponent, NavigationComponent]
})
export class CoreModule { }
