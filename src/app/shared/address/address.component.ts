import { FormControl, FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { Address } from './address';

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
  form: FormGroup;
  @Input() title?: string;

  constructor() {
    this.form = new FormGroup({
      street: new FormControl(''),
      zip: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl('')
    });
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(val: Address): void {
    if (val) {
      this.form.setValue(val, { emitEvent: false });
    }
  }
}
