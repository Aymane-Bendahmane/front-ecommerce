import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './componants/cart/cart.component';
import { HomeComponent } from './componants/home/home.component';
import { FooterComponent } from './componants/footer/footer.component';
import { HeaderComponent } from './componants/header/header.component';
import { ProductComponent } from './componants/product/product.component';
import { ThankyouComponent } from './componants/thankyou/thankyou.component';
import { CheckoutComponent } from './componants/checkout/checkout.component';
import {ListproductComponent} from "./componants/listproduct/listproduct.component";
import {LoginComponent} from "./componants/login/login.component";
import {MyCommandsComponent} from "./componants/my-commands/my-commands.component";
import {SearchComponent} from "./componants/search/search.component";
const routes: Routes = [
  {
    path:'', component : HomeComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'product/:id',component:ProductComponent
  },
  {
    path:'checkout',component:CheckoutComponent
  },
  {
    path:'thankyou',component:ThankyouComponent
  },
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'listproduct/:cat' , component:ListproductComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'mycommands' , component:MyCommandsComponent
  },{
  path:'search/:keyword' ,component:SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
