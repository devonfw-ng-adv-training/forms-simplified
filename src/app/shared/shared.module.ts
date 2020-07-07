import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddressComponent } from './address/address.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [AddressComponent],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AddressComponent
  ]
})
export class SharedModule {

}
