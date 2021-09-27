import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Environment} from "./environment";

@Injectable({
  providedIn: 'root'
})
export class RecServiceService {

  constructor(public  http:HttpClient) { }

  getRecommendation(id:any){
    console.log(Environment.hostRec+'/Rec?='+id)
    return this.http.get(Environment.hostRec+'/Rec?='+id)
  }

}
