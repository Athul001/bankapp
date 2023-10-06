import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser: any
  currentacno: any

  // reduntant data
  userDetails: any = {
    1000: { acno: 1000, username: "amal", password: 123, balance: 0,transaction:[]},
    1001: { acno: 1001, username: "anu", password: 123, balance: 0, transaction:[]},
    1002: { acno: 1002, username: "arun", password: 123, balance: 0,transaction:[]},
    1003: { acno: 1003, username: "mega", password: 123, balance: 0,transaction:[]}

  }

  constructor() { }

  register(acno: any, username: any, password: any) {

    var userDetails = this.userDetails
    if (acno in userDetails) {
      return false
    }
    else {

      userDetails[acno] = { acno, username, password, balance: 0,transaction:[] }
      // console.log(userDetails);

      return true

    }

  }
  login(acno: any, psw: any) {

    var userDetails = this.userDetails

    // account number ---- to show in transation ts file
    // this.currentacno=userDetails[acno]['acno']
    // or
    this.currentacno=acno
    

    // to show the variable in the dashboard ---- the variable named currentuser is created in class
    // then the data is stord in that variable
    this.currentuser = userDetails[acno]['username']

    if (acno in userDetails) {
      if (psw == userDetails[acno]['password']) {
        return true

      }
      else {
        alert('incorrect password')
        return false
      }
    }
    else {
      alert('user not exist')
      return false
    }
  }

  deposit(acno: any, psw: any, amnt: any) {
    let userDetails = this.userDetails

    // we have to convert amount data type from str (string) to int (integer)
    var amount = parseInt(amnt)
    if (acno in userDetails) {
      if (psw == userDetails[acno]['password']) {
        userDetails[acno]['balance'] += amount

        // add deposit details in transcation array
        userDetails[acno]['transaction'].push({type:'CREDIT',amount:amount})
        return userDetails[acno]['balance']
      }
      else {
        alert('incorrect password')
        return false
      }

    }
    else {
      alert('incorrect username')
      return false
    }

  }

  withdraw(acno: any, psw: any, amnt: any) {
    let userDetails = this.userDetails

    // we have to use parseInt to convert str to int data type
    var amount = parseInt(amnt)
    if (acno in userDetails) {
      if (psw == userDetails[acno]['password']) {
        if (amount <= userDetails[acno]['balance']) {
          userDetails[acno]['balance'] -= amount

          // to add this.withdraw details in array --- transaction[]
          userDetails[acno]['transaction'].push({type:'DEBIT',amount})
          return userDetails[acno]['balance']
        }
        else {
          alert('insufficient balance')
          return false
        }
      }
      else {
        alert('incorrect password')
        return false
      }

    }
    else {
      alert('incorrect username')
      return false
    }

  }

  gettransaction(acno:any){
    return this.userDetails[acno]['transaction']
  }
}
