import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {CaddyService} from "../../services/caddy.service";
import {Environment} from "../../services/environment";
import {Caddy} from "../Model/Caddy";
import {AuthServiceService} from "../../services/Authentication/auth-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public c: Caddy | any;

  constructor(private r: Router, public caddy: CaddyService,public lg:AuthServiceService) {
  }

  categories = ["laptops", "smartphones", "cameras", "Accessories"]

  host: any = Environment.host

  nb:any
  ngOnInit(): void {

  }

  goTocategory(st: string) {
    console.log("clicked : " + st)
    this.r.navigateByUrl('/listproduct/' + st)

  }


  deleteCAddy(id: any) {
    this.caddy.removeFromCaddy(id)
  }

  logout() {
    this.lg.Logout()
  }
}
