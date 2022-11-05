import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  hide = true;
  displayValName?: string
  displayValPassword?: string

  saveInput(valname: string, valpassword: string ) {
    sessionStorage.setItem('UserNameLogin', valname)
    sessionStorage.setItem('PasswordLogin', valpassword)
  }

  getFromStorage(){
    this.displayValName = sessionStorage.getItem('UserNameLogin')??''
    this.displayValPassword = sessionStorage.getItem('PasswordLogin')??''
  }

  constructor() { }

  ngOnInit(): void {
  }

}