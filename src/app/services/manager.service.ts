import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Environment} from "./environment";
@Injectable({
  providedIn: 'root'
})
export class ManagerService {


  constructor(private http:HttpClient) { }

  getArticleByCategory(category: string | undefined){
    return this.http.get(Environment.host+'/getArticlesBycategories/'+category) ;
  }
}
