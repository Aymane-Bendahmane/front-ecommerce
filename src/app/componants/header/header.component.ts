import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private r:Router) { }
  categories=["laptops","smartphones","cameras","accessories"]



  ngOnInit(): void {
  }

  goTocategory(st: string) {
    console.log("clicked : "+ st)
    this.r.navigateByUrl('/listproduct/'+st)
  }
}
