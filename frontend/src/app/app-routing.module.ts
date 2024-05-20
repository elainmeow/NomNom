import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { authGuard } from './auth/guards/auth.guard';
import { SliderHomepageComponent } from './components/pages/slider-homepage/slider-homepage.component';
import { OrderCompleteComponent } from './components/pages/order-complete/order-complete.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { AboutNomnomComponent } from './components/pages/about-nomnom/about-nomnom.component';
import { ServiceTermComponent } from './components/pages/service-term/service-term.component';
import { PaymentTermComponent } from './components/pages/payment-term/payment-term.component';
import { ExchangeReturnTermComponent } from './components/pages/exchange-return-term/exchange-return-term.component';
import { FAQComponent } from './components/pages/faq/faq.component';
import { ProfileUserComponent } from './components/pages/profile-user/profile-user.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'About Us', component:AboutNomnomComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path: 'tag/:tag', component: HomeComponent },
  {path:'food/category/:category', component:HomeComponent},
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'service-term', component: ServiceTermComponent},
  {path:'exchange-term', component: ExchangeReturnTermComponent},
  {path:'faq', component: FAQComponent},
  {path:'slider-homepage', component: SliderHomepageComponent},
  {path:'login', component: LoginPageComponent},
  {path:'register', component: RegisterPageComponent},
  {path:'profile-user', component: ProfileUserComponent},
  {path:'payment-term', component: PaymentTermComponent},
  {path: 'checkout', component: CheckoutPageComponent, canActivate: [authGuard] },
  {path: 'payment', component: PaymentPageComponent, canActivate: [authGuard] },
  {path: 'order-complete', component: OrderCompleteComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
