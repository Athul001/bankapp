import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

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

  constructor(private ds: DataService, private router: Router) {

    this.user = this.ds.currentuser
  }

  ngOnInit(): void {
  }

  Deposit() {

    var acno = this.acno
    var psw = this.psw
    var amnt = this.amnt

    const result = this.ds.deposit(acno, psw, amnt)
    if (result) {
      alert(`${amnt} is credited in your account and your available balance is ${result}`)
    }


    // alert('deposit works')

  }
  Withdraw() {

    var acno1 = this.acno1
    var psw1 = this.psw1
    var amnt1 = this.amnt1

    const result = this.ds.withdraw(acno1, psw1, amnt1)
    if (result) {
      alert(`${amnt1} is debited from your account and your available balance is ${result}  `)
    }


    // alert('withdraw works')

  }
  logout() {
    localStorage.removeItem('currentAcno')
    localStorage.removeItem('currentUser')

    this.router.navigateByUrl('')
  }

}
