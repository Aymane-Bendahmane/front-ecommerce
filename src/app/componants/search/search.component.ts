import { Component, OnInit } from '@angular/core';
import {ManagerService} from "../../services/ManagerService/manager.service";
import {ActivatedRoute} from "@angular/router";
import {CaddyService} from "../../services/CaddyService/caddy.service";
import {Environment} from "../../services/environment";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public articles: any;

  constructor(public service:ManagerService,public rt:ActivatedRoute,public caddy:CaddyService) { }
  cat: string | undefined
  host=Environment.host
  ngOnInit(): void {
    this.rt.params.subscribe(s => {
      this.search(s.keyword)
    })
  }
  search(key:any){
    this.service.search(key).subscribe(d=>{
      console.log("here :: ")
      this.articles = d
    })

  }
  addToCaddy(article: any) {
    console.log("clicked add to card")
    this.caddy.addProductToCAddyWithQuantity(article,1)
  }
}
