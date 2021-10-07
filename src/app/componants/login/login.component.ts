import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthServiceService} from "../../services/Authentication/auth-service.service";
import {ManagerService} from "../../services/manager.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthServiceService,private s:ManagerService) { }
  login = new FormGroup({
    username : new FormControl(),
    password : new FormControl()
  })

  ngOnInit(): void {
  }

  onLogin() {
    console.log(this.login.value)
    this.authService.Login(this.login.value).subscribe(data=>{
      // @ts-ignore
      let ref = data['refresh-token']
      // @ts-ignore
      let acc  = data['access-token']
      localStorage.setItem('refresh-token',JSON.stringify(ref))
      localStorage.setItem('access-token',JSON.stringify(acc))
    })

  }
  getCommends(){

    this.s.getcommends().subscribe(data=>{
      console.log('comandes')
      console.log(data)
    })
  }
}
