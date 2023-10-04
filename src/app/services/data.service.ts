import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser: any

  // reduntant data
  userDetails: any = {
    1000: { acno: 1000, username: "amal", password: 123, balance: 0 },
    1001: { acno: 1001, username: "anu", password: 123, balance: 0 },
    1002: { acno: 1002, username: "arun", password: 123, balance: 0 },
    1003: { acno: 1003, username: "mega", password: 123, balance: 0 }

  }

  constructor() { }

  register(acno: any, username: any, password: any) {

    var userDetails = this.userDetails
    if (acno in userDetails) {
      return false
    }
    else {

      userDetails[acno] = { acno, username, password, balance: 0 }
      // console.log(userDetails);

      return true

    }

  }
  login(acno: any, psw: any) {

    var userDetails = this.userDetails

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
}
