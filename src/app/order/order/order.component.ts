import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AddressModel } from 'src/app/shared/address/address.component';

interface OrderFormModel {
  name: FormControl<string>;
  lastname: FormControl<string>;
  invoiceAddress: FormControl<AddressModel>;
  deliveryAddress: FormControl<AddressModel>;
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
      invoiceAddress: this.fb.control<AddressModel>(null),
      deliveryAddress: this.fb.control<AddressModel>(null)
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
