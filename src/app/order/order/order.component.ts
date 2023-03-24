import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface OrderFormModel {
  name: FormControl<string>;
  lastname: FormControl<string>;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup<OrderFormModel>;
  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      name: this.fb.control(''),
      lastname: this.fb.control(''),
    });
  }

  ngOnInit(): void {
  }

  apply() {
    console.log(this.orderForm.value);
  }

  cancelForm() {
    this.orderForm.reset();
  }
}
