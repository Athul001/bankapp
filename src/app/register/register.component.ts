import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  uname:any
  acno:any
  psw:any

  constructor(private ds:DataService,private router:Router){}
        // dependency Injection--to share data between two classes

  ngOnInit(){
    
  }

  register(){
    var uname=this.uname
    var acno=this.acno
    var psw=this.psw

   const result=this.ds.register(acno,uname,psw)
                // calling function---from dataservice class and method register on other page
                // and stored in a variable named result and type const
   
   if(result){
    alert('sucessfully registered')
    this.router.navigateByUrl('')
   }
   else{
    alert('user already exist')
   }
  }

}
