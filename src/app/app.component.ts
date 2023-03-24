import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface RegistrationFormModel {
  username: FormControl<string>;
  password: FormControl<string>;
  rating: FormControl<number | null>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  registrationForm: FormGroup<RegistrationFormModel>;

  constructor(formBuilder: FormBuilder) {
    this.registrationForm = formBuilder.group({
      username: formBuilder.nonNullable.control<string>('', Validators.required),
      password: formBuilder.nonNullable.control<string>('', Validators.required),
      rating: formBuilder.control<number | null>(null),
    });
  }

  ngOnInit(): void {}

  logDetails(): void {
    console.log(this.registrationForm.value);
  }
}
