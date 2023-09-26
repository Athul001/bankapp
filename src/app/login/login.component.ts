import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  acno: any
  psw: any

  aim = 'Federal Bank - Your Perfect Banking Partner'
  data = 'Enter Acno'
  data1 = 'Enter Password'

  userDetails: any = {
    1000: { acno: 1000, username: "amal", password: 123, balance: 0 },
    1001: { acno: 1001, username: "anu", password: 123, balance: 0 },
    1002: { acno: 1002, username: "arun", password: 123, balance: 0 },
    1003: { acno: 1003, username: "mega", password: 123, balance: 0 }

  }

  constructor() { }

  ngOnInit(): void {

  }

  login() {
    var acno = this.acno
    var psw = this.psw
    var userDetails = this.userDetails

          // event binding (view to component)

    if (acno in userDetails) {

      if (psw == userDetails[acno]['password']) {
        alert('login success')
      }
      else {
        alert('incorrect password')
      }

    }
    else {
      alert('user not exist')
    }
  }



  acnoChange(event: any) {
    this.acno = event.target.value
    // console.log(event.target.value)-----to get the data variable-----$event binding(view to component)
  }

  pswChange(event: any) {
    this.psw = event.target.value
    // console.log(this.psw)-----$event binding
  }
}
