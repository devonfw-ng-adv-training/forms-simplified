import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Address } from 'src/app/shared/address/address';

interface OrderFormModel {
  name: FormControl<string>;
  lastname: FormControl<string>;
  invoiceAddress: FormControl<Address>;
  deliveryAddress: FormControl<Address>;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup<OrderFormModel>;
  hasDeliveryAddress = new FormControl<boolean>(false);

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      name: this.fb.control(''),
      lastname: this.fb.control(''),
      invoiceAddress: this.fb.control<Address>(null),
      deliveryAddress: this.fb.control<Address>(null)
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
