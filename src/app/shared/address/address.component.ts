import {
  FormControl, FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR, Validators,
  NG_VALIDATORS, Validator, AbstractControl, ValidationErrors
} from '@angular/forms';
import { Component, forwardRef, Input } from '@angular/core';
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
    }, {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressComponent),
      multi: true
    },]
})
export class AddressComponent implements ControlValueAccessor, Validator {
  form: FormGroup;
  @Input() title?: string;

  constructor() {
    this.form = new FormGroup({
      street: new FormControl(''),
      zip: new FormControl('', { validators: [Validators.pattern('[0-9]*')] }),
      city: new FormControl(''),
      country: new FormControl('')
    });
  }

  validate(control: AbstractControl): ValidationErrors {
    return this.form.valid ? null : { invalidForm: { valid: false, message: 'address form is invalid' } };
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
