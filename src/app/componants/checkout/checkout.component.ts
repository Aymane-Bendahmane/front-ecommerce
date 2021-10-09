import { Component, OnInit } from '@angular/core';
import {CaddyService} from "../../services/caddy.service";
import {Environment} from "../../services/environment";
import {ManagerService} from "../../services/manager.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public caddy: CaddyService,private service:ManagerService) { }
  host: any = Environment.host
  ngOnInit(): void {
  }

  submitOrder() {
    console.log('Submitting order ')

    //this.service.submitOrder()
  }
}
