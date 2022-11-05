import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

/**
 * @title Basic checkboxes
 */
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {
  hide = true
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }

  saveForm(username: string, email: string, confirmemail: string, instituicao: string, cargo: string, senha: string, confirmsenha: string) {
    sessionStorage.setItem('SignUpUsername', username)
    sessionStorage.setItem('SignUpEmail', email)
    sessionStorage.setItem('SignUpConfirmEmail', confirmemail)
    sessionStorage.setItem('SignUpInstituicao', instituicao)
    sessionStorage.setItem('SignUpCargo', cargo)
    sessionStorage.setItem('SignUpSenha', senha)
    sessionStorage.setItem('SignUpConfirmSenha', confirmsenha)
  }

}

// import { Component, OnInit } from '@angular/core';
// import {ThemePalette} from '@angular/material/core';

// @Component({
//   selector: 'app-sign-up-form',
//   templateUrl: './sign-up-form.component.html',
//   styleUrls: ['./sign-up-form.component.css']
// })
// export class SignUpFormComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
