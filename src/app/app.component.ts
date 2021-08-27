import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.registrationForm = formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      rating: [null],
    });
  }

  ngOnInit(): void {}

  logDetails(): void {
    console.log(this.registrationForm.value);
  }

  updateRating(rating: number): void {
    this.registrationForm.controls.rating.setValue(rating, {
      emitEvent: false,
    });
  }
}
