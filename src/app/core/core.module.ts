import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [HomeComponent, NavigationComponent],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [HomeComponent, NavigationComponent]
})
export class CoreModule { }
