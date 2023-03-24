import { Component } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { Address } from './address';

interface AddressFormModel {
  zip: FormControl<string>;
  city: FormControl<string>;
  street: FormControl<string>;
  country: FormControl<string>;
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements ControlValueAccessor {
  form: FormGroup<AddressFormModel>;

  constructor() {
    this.form = new FormGroup({
      street: new FormControl(''),
      zip: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl('')
    });
  }

  registerOnChange(fn: (address: Address) => void): void {
  }

  registerOnTouched(fn: () => void): void {
  }

  writeValue(obj: Address): void {
  }
}
