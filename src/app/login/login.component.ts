import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  acno: any
  psw: any

  //      DATA BINDING (DATA SHARING)

  //( component to view )  1. string interpollation
  aim = 'Federal Bank - Your Perfect Banking Partner'

  // ( component to view ) 2. property binding
  data = 'Enter Acno'
  

  userDetails: any = {
    1000: { acno: 1000, username: "amal", password: 123, balance: 0 },
    1001: { acno: 1001, username: "anu", password: 123, balance: 0 },
    1002: { acno: 1002, username: "arun", password: 123, balance: 0 },
    1003: { acno: 1003, username: "mega", password: 123, balance: 0 }

  }

  constructor(private router:Router) { }

              // (private router:Router) -----> Dependency Injection 
                                              //private/public --> access specifier

  ngOnInit(): void {
  }

  login(){
    var acno = this.acno
    var psw = this.psw
  
    var userDetails = this.userDetails
  
    if (acno in userDetails) {
      if (psw==userDetails[acno]['password']) {
        alert('login success')
        // redirection
        this.router.navigateByUrl('dashboard')
        // navigateByUrl method
      }
      else {
        alert('incorrect password')
      }
    }
    else {
      alert('user not exist')
    }
  }

  
}