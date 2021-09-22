import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './componants/cart/cart.component';
import { HomeComponent } from './componants/home/home.component';
import { FooterComponent } from './componants/footer/footer.component';
import { HeaderComponent } from './componants/header/header.component';
import { ProductComponent } from './componants/product/product.component';
import { ThankyouComponent } from './componants/thankyou/thankyou.component';
import { CheckoutComponent } from './componants/checkout/checkout.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import {ListproductComponent} from "./componants/listproduct/listproduct.component";
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    ThankyouComponent,
    CheckoutComponent,
    ListproductComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
