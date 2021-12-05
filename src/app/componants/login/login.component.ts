import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthServiceService} from "../../services/Authentication/auth-service.service";
import {ManagerService} from "../../services/ManagerService/manager.service";
import {Location} from "@angular/common";
import {AsyncAction} from "rxjs/internal/scheduler/AsyncAction";
import {async} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthServiceService, private s: ManagerService, private location: Location) {
  }

  login = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  ngOnInit(): void {
  }

  onLogin() {
    console.log(this.login.value)
    this.authService.Login(this.login.value).subscribe(data => {
      this.authService.isLogin = true
      // @ts-ignore
      let ref = data['refresh-token']
      // @ts-ignore
      let acc = data['access-token']
      localStorage.setItem('refresh-token', JSON.stringify(ref))
      localStorage.setItem('access-token', JSON.stringify(acc))
      this.s.profile().subscribe(data => {
        // @ts-ignore
        this.authService.isAdmin(data['roles']);
      })
      this.location.back()

    })

  }

  getCommends() {

    this.s.getcommends().subscribe(data => {
      console.log('comandes')
      console.log(data)
    })
  }
}
