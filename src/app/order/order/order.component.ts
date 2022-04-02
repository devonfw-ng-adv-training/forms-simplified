import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  hasDeliveryAddress = new FormControl();

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      name: this.fb.control(''),
      lastname: this.fb.control(''),
      invoiceAddress: this.fb.control(null),
      deliveryAddress: this.fb.control(null)
    });
  }

  ngOnInit(): void {
  }

  apply() {
    if (this.orderForm.valid) {
      console.log(this.orderForm.value);
    } else {
      console.log('invalid');
    }
  }

  cancelForm() {
    this.orderForm.reset();
  }
}
