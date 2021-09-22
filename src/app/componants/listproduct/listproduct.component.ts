import { Component, OnInit } from '@angular/core';
import {ManagerService} from "../../services/manager.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  constructor(private service:ManagerService,private rt:ActivatedRoute) { }
  cat: string | undefined
  articles:any
  ngOnInit(): void {
    this.cat = this.rt.snapshot.params.cat
    console.log("category : " + this.cat)
    this.getArticles()
    console.log(this.articles)
  }
  getArticles(){
    this.service.getArticleByCategory(this.cat).subscribe( data =>{
      this.articles = data
    })
  }
}
