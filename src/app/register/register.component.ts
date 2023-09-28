import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  uname:any
  acno:any
  psw:any

  constructor(private ds:DataService){}
        // dependency Injection--to share data between two classes

  ngOnInit(){
    
  }

  register(){
    var uname=this.uname
    var acno=this.acno
    var psw=this.psw

   const result=this.ds.register(acno,uname,psw)
   
   if(result){
    alert('sucessfully registered')
   }
   else{
    alert('user already exist')
   }
  }

}
