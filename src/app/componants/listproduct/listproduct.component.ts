import { Component, OnInit } from '@angular/core';
import {ManagerService} from "../../services/ManagerService/manager.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Environment} from "../../services/environment";
import {CaddyService} from "../../services/CaddyService/caddy.service";

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  constructor(public service:ManagerService,public rt:ActivatedRoute,public caddy:CaddyService) { }
  cat: string | undefined
  articles:any
  host=Environment.host
  ngOnInit(): void {


    this.rt.params.subscribe( (routeParam) =>{
      this.cat = routeParam.cat
      console.log('route param :' + routeParam)
      this.getArticles()
    })

  }


   getArticles(){
    this.service.getArticleByCategory(this.cat).subscribe( data =>{
      this.articles = data
      console.log(data)
    })
  }

  addToCaddy(article: any) {
    console.log("clicked add to card")
    this.caddy.addProductToCAddyWithQuantity(article,1)
  }
}
