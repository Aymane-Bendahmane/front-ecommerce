import { Component, OnInit } from '@angular/core';
import {ManagerService} from "../../services/ManagerService/manager.service";
import {Environment} from "../../services/environment";
import {Router} from "@angular/router";
import {CaddyService} from "../../services/CaddyService/caddy.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public  articles: any;
  host=Environment.host
  categories=["laptops","smartphones","cameras","Accessories"]

  constructor(public service:ManagerService,private r:Router,public caddy:CaddyService) { }

  ngOnInit(): void {
    this.get5firstArticles('laptops')
  }

  get5firstArticles(s:string)
  {
    this.service.get5FirstArticleByCategory(s).subscribe( data =>{
      this.articles = data
    })
  }
  getCommends(){

    this.service.getcommends().subscribe(data=>{
      console.log('comandes')
      console.log(data)
    })
  }

}
