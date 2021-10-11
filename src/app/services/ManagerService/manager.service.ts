import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Environment} from "../environment";
import {Router, RouterLink} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {


  constructor(private http: HttpClient,private r:Router) {
  }

  getArticleByCategory(category: string | undefined) {
    return this.http.get(Environment.host + '/getArticlesBycategories/' + category);
  }

  get5FirstArticleByCategory(category: string | undefined) {
    return this.http.get(Environment.host + '/getFirstArticlesByCategories/' + category);
  }

  getArticleById(id: string) {
    return this.http.get(Environment.host +'/articles/' + id + '?projection=p2');
  }
  getRatings(s:string){
    return this.http.get(s)
  }

  goArticle(id:string) {
    this.r.navigateByUrl('/product/' + id)
  }

  getcommends() {
    console.log('before commandes')
       return this.http.get(Environment.host+'/ratings')

  }

  submitOrder(order:any) {
    return this.http.post(Environment.host+'/createCommande',order)
  }

  createUser(value: any) {
    return this.http.post(Environment.host+'/createUser',value)
  }
  profile(){
    return this.http.get(Environment.host+'/profile')
  }

  getAveregeRating(id:any){
    return this.http.get(Environment.host+'/getAverageRating/'+id);
  }
}
