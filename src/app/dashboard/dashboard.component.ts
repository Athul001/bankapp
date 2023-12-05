import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user: any

  acno: any
  psw: any
  amnt: any

  acno1: any
  psw1: any
  amnt1: any


  // current date and time
  sdate:any


  constructor(private ds: DataService, private router: Router, private formbuilder: FormBuilder) {

    this.user = this.ds.currentuser

    // date and time 

    this.sdate=new Date();
  }
   // create deposit form model

   depositForm = this.formbuilder.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    amnt: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  // create withdraw form model

  withdrawForm = this.formbuilder.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw1: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    amnt1: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })


  ngOnInit(): void {
    if(!localStorage.getItem('currentAcno')){
      alert('Please Login First')
      this.router.navigateByUrl('');
    }
  }

  Deposit() {

    var acno = this.depositForm.value.acno
    var psw = this.depositForm.value.psw
    var amnt = this.depositForm.value.amnt



    if (this.depositForm.valid) {
      const result = this.ds.deposit(acno, psw, amnt)
      if (result) {
        alert(`${amnt} is credited in your account and your available balance is ${result}`)
      }


      // alert('deposit works')

    }
    else{
      alert('invalid form')
    }
  }

  Withdraw() {

    var acno1 = this.withdrawForm.value.acno1
    var psw1 = this.withdrawForm.value.psw1
    var amnt1 = this.withdrawForm.value.amnt1

    
    if(this.withdrawForm.valid){
      const result = this.ds.withdraw(acno1, psw1, amnt1)
      if (result) {
        alert(`${amnt1} is debited from your account and your available balance is ${result}  `)
      }
  
  
      // alert('withdraw works')
  
    }
    else{
      alert('invalid form')
    }
    
  }
  logout() {
    localStorage.removeItem('currentAcno')
    localStorage.removeItem('currentUser')

    this.router.navigateByUrl('')
  }
delete(){
  // alert('clicked')
  this.acno=JSON.parse(localStorage.getItem('currentAcno')||'')
}
onCancel(){
  this.acno="";
}
}
