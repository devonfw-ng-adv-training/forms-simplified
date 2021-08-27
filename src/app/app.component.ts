import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  registrationForm: FormGroup;

  private destroyed$ = new Subject();

  constructor(formBuilder: FormBuilder) {
    this.registrationForm = formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      rating: [null, [Validators.required, this.validateRating]],
      isOptOut: [null],
      overallRating: [null],
    });
  }

  ngOnInit(): void {
    this.registrationForm.controls.isOptOut.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((isOptOut: boolean) => {
        if (isOptOut) {
          this.registrationForm.controls.rating.reset();
          this.registrationForm.controls.rating.disable();
        } else {
          this.registrationForm.controls.rating.enable();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  logDetails(): void {
    console.log(this.registrationForm.value);
  }

  get isInvalidRating(): boolean {
    return this.registrationForm.controls.rating.touched && this.registrationForm.controls.rating.invalid;
  }

  private validateRating(
    control: AbstractControl
  ): ValidationErrors | null {
    const rating = control.value;
    if (rating == null) {
      return null;
    }
    if (rating <= 3) {
      return {
        invalidRating: true,
      };
    }
    return null;
  }
}
