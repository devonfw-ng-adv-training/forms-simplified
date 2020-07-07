import { FormControl, FormGroup, ControlValueAccessor } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements ControlValueAccessor {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      street: new FormControl(),
      zip: new FormControl(),
      city: new FormControl(),
      country: new FormControl()
    });
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }
}
