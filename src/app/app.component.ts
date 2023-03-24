import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface RegistrationFormModel {
  username: FormControl<string>;
  password: FormControl<string>;
  rating: FormControl<number | null>;
  isOptOut: FormControl<boolean>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  registrationForm: FormGroup<RegistrationFormModel>;

  private destroyed$ = new Subject();

  constructor(formBuilder: FormBuilder) {
    this.registrationForm = formBuilder.group({
      username: formBuilder.nonNullable.control<string>('', Validators.required),
      password: formBuilder.nonNullable.control<string>('', Validators.required),
      rating: formBuilder.control<number | null>(null, Validators.required),
      isOptOut: formBuilder.nonNullable.control<boolean>(false),
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
}
