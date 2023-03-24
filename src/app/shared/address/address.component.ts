import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface AddressModel {
  zip: string;
  city: string;
  street: string;
  country: string;
}

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
  @Input() title?: string;

  constructor() {
    this.form = new FormGroup({
      street: new FormControl(''),
      zip: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl('')
    });
  }

  registerOnChange(fn: (address: AddressModel) => void): void {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: () => void): void {
  }

  writeValue(val: AddressModel): void {
    if (val) {
      this.form.setValue(val, { emitEvent: false });
    } else {
      this.form.reset();
    }
  }
}
