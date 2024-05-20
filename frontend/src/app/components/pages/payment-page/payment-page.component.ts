import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { OrderService } from '../../../services/order.service.spec';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css'
})
export class PaymentPageComponent implements OnInit, OnDestroy {
  order: Order = new Order();
  checkoutForm!: FormGroup;
  subscription!: Subscription;

  constructor(private cartService: CartService,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private orderService: OrderService,
              private toastrService: ToastrService,
              private router: Router) {
    const cart = this.cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {
    this.subscription = this.cartService.getOrderObservable().subscribe(order => {
      if (order) {
        this.order = order;
        this.checkoutForm = this.formBuilder.group({
          name: [{ value: this.order.name, disabled: true }, Validators.required],
          address: [{ value: this.order.address, disabled: true }, Validators.required]
        });
      } else {
        const { name, address } = this.userService.currentUser;
        this.checkoutForm = this.formBuilder.group({
          name: [{ value: name, disabled: true }, Validators.required],
          address: [{ value: address, disabled: true }, Validators.required]
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
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

    this.orderService.create(this.order).subscribe({
      next: (response) => {
        this.cartService.clearCart();
        console.log('Order successfully created', response);
        this.router.navigate(['/order-complete']);
      },
      error: (error) => {
        console.error('Error creating order', error);
        this.toastrService.error('Failed to create order', 'Error');
      }
    });
  }
}