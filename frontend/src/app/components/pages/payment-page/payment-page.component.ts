import { Component, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css'
})
export class PaymentPageComponent implements OnInit {
  order: Order = new Order();
  checkoutForm!: FormGroup;

  constructor(private cartService: CartService,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private toastrService: ToastrService,
              private router: Router) {
    const cart = this.cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {
    const { name, address } = this.userService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name: [{ value: name, disabled: true }, Validators.required],
      address: [{ value: address, disabled: true }, Validators.required]
    });
  }

  get fc() {
    return this.checkoutForm.controls;
  }

  payWithCOD() {
    if (this.checkoutForm.invalid) {
      this.toastrService.warning('Please fill in the inputs', 'Invalid Inputs');
      return;
    }

    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;

    console.log('Sending order:', this.order);

    this.router.navigate(['/order-complete']);
  }
}