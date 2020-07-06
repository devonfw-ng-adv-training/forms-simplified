import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { BookOverviewComponent } from './book-overview/book-overview.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [BookOverviewComponent, BookDetailsComponent],
})
export class BookModule {
}
