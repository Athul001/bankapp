import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  uname: any
  acno: any
  psw: any

   // create register form model
   registerForm = this.formbuilder.group({ 
    uname: ['',[Validators.required, Validators.pattern('[a-zA-Z]+')]], 
    acno: ['',[Validators.required, Validators.pattern('[0-9]+')]], 
    psw: ['',[Validators.required, Validators.pattern('[0-9]+')]] })


  constructor(private ds: DataService, private router: Router, private formbuilder: FormBuilder) { }
  // dependency Injection--to share data between two classes

 


  ngOnInit() {

  }

  register() {
    var uname = this.registerForm.value.uname
    var acno = this.registerForm.value.acno
    var psw = this.registerForm.value.psw



    if (this.registerForm.valid) {
      const result = this.ds.register(acno, uname, psw)
      // calling function---from dataservice class and method register on other page
      // and stored in a variable named result and type const

      if (result) {
        alert('sucessfully registered')
        this.router.navigateByUrl('')
      }
      else {
        alert('user already exist')
      }

    }
    else{
      alert('invalid form')
    }



  }

}
