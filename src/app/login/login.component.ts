import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
  

  

  constructor(private router:Router,private ds:DataService) { }

              // (private router:Router) -----> Dependency Injection 
                                              //private/public --> access specifier

  ngOnInit(): void {
  }

  login(){
    var acno = this.acno
    var psw = this.psw

  const result=this.ds.login(acno,psw)
  // calling function from dataservice
  if(result){
    alert('Login Success')
    this.router.navigateByUrl('dashboard')
    // routing technique--> navigateByUrl method
  }
    
  
    
  }

  
}