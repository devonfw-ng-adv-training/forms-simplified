import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
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
  styleUrls: ['./address.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    }
  ]
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
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: () => void): void {
  }

  writeValue(val: Address): void {
    if (val) {
      this.form.setValue(val, { emitEvent: false });
    } else {
      this.form.reset();
    }
  }
}
