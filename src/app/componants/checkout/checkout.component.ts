import {Component, OnInit} from '@angular/core';
import {CaddyService} from "../../services/CaddyService/caddy.service";
import {Environment} from "../../services/environment";
import {ManagerService} from "../../services/ManagerService/manager.service";
import {AuthServiceService} from "../../services/Authentication/auth-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Commande} from "../Model/Commande";
import {ProductItemsV2} from "../Model/productItemsV2";
import {Message} from "@angular/compiler/src/i18n/i18n_ast";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  private submited: boolean = false;

  constructor(public caddy: CaddyService, private service: ManagerService, public auth: AuthServiceService, private rt: Router) {
  }

  host: any = Environment.host
  creating = new FormGroup({

    nom: new FormControl(),
    prenom: new FormControl(),
    userLogin: new FormControl(),
    sexe: new FormControl(),
    userAddress: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    userPassword: new FormControl(),
  })

  ngOnInit(): void {
  }

  submitOrder(description: any) {
    console.log('Submiting order')

    this.service.profile().subscribe(data => {
      let commande: Commande = new Commande();


      // @ts-ignore
      commande.idUser = data.idU
      commande.cmdDescription = description.value.description
      commande.total = this.caddy.getTotal()

      this.caddy.caddy.items.forEach((it, n) => {
        commande.productItems.push({"qt": it.quantity, "id_atyicle": n})

      })

    this.service.submitOrder(commande).subscribe(data=>{
      console.log(data)
      this.caddy.clearCaddy()
      alert('Order submited')
      this.rt.navigateByUrl("/")
    })
    })


    //this.service.submitOrder()
  }

  createUser() {
    console.log(this.creating.value)
    this.service.createUser(this.creating.value).subscribe(data => {
      this.rt.navigateByUrl('/login')
    })
  }
}
