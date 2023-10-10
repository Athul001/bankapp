import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  //      DATA BINDING (DATA SHARING)

  //( component to view )  1. string interpollation
  aim = 'Federal Bank - Your Perfect Banking Partner'

  // ( component to view ) 2. property binding
  data = 'Enter Acno'




  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) {

  }
  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })
  // (private router:Router) -----> Dependency Injection 
  //private/public --> access specifier

  ngOnInit(): void {
  }

  login() {
    var acno = this.loginForm.value.acno
    var psw = this.loginForm.value.psw

    if (this.loginForm.valid) {

      const result = this.ds.login(acno, psw)
      // calling function from dataservice

      if (result) {
        alert('Login Success')
        this.router.navigateByUrl('dashboard')
        // routing technique--> navigateByUrl method
      }

    }
    else {
      alert('invalid form')
    }







  }


}