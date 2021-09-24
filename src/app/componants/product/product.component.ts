import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ManagerService} from "../../services/manager.service";
import {Environment} from "../../services/environment";
import {Caddy} from "../Model/Caddy";
import {CaddyService} from "../../services/caddy.service";
import {NgForm} from '@angular/forms';
import {RecServiceService} from "../../services/rec-service.service";

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


  constructor(private rt: ActivatedRoute, private service: ManagerService, public caddy: CaddyService, public recService: RecServiceService) {
  }

  ngOnInit(): void {
    this.rt.params.subscribe(s => {
      this.getArticleById(s.id)
      this.getRecommendations(s.id)
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
    this.recService.getRecommendation(id).subscribe(data => {

      // @ts-ignore
     let r =  Array(data["Correlation"])
       console.log(r)
      /*r.map(c=>{
        console.log(c.key)
      })*/
    })

  }
}
