import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      rating: [null, Validators.required],
      isOptOut: [null],
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
