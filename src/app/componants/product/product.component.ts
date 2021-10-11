import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ManagerService} from "../../services/ManagerService/manager.service";
import {Environment} from "../../services/environment";
import {Caddy} from "../Model/Caddy";
import {CaddyService} from "../../services/CaddyService/caddy.service";
import {NgForm} from '@angular/forms';
import {RecServiceService} from "../../services/RecSysService/rec-service.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public article: any;
  host = Environment.host
  public ratings: any;
  private linkRating: any;
  public recArticles = new Array()
  public averageRating: any;

  constructor(private rt: ActivatedRoute, public service: ManagerService, public caddy: CaddyService, public recService: RecServiceService) {
  }

  ngOnInit(): void {
    this.rt.params.subscribe(s => {
      this.getArticleById(s.id)
      this.getRecommendations(s.id)
      this.getAverageRating(s.id)
    })

  }

  async getArticleById(id: string) {
    await this.service.getArticleById(id).subscribe(data => {
      this.article = data
      this.linkRating = this.article["_links"].ratings.href
      this.linkRating = this.linkRating.replace('{?projection}', '') + '?projection=p3'
      this.getRatings(this.linkRating)


    })
  }

  getRatings(s: string) {
    console.log('le string : ' + s)
    this.service.getRatings(this.linkRating).subscribe(data => {
      this.ratings = data
    })
  }

  counter(i: number) {
    return new Array(i);
  }

  getRecommendations(id: any) {
    this.recArticles = new Array()
    this.recService.getRecommendation(id).subscribe(data => {
      // @ts-ignore
      let r = Array(data["Correlation"])
      // @ts-ignore
      let c = Object.entries(data["Correlation"])
      let it = c.values();
      c.forEach(c => {
        let array = it.next().value
        if (id != array[0]) {
          this.service.getArticleById(array[0]).subscribe(data => {
            this.addDAtaToarray(data)
          })
        }
      })
    })

  }

  addDAtaToarray(data: any) {
    this.recArticles?.push(data)
  }

  addToCaddy(article: any) {
    console.log("clicked add to card")
    this.caddy.addProductToCAddyWithQuantity(article, 1)
  }

  gotToArticle(id: any) {
    this.service.goArticle(id)
  }
  getAverageRating(id:any){
    this.service.getAveregeRating(id).subscribe(data=>{
      console.log(data)
      this.averageRating = data ;
    })
  }

  submitRating(f: NgForm | any) {
    
  }
}
