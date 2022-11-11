import { Router } from '@angular/router';

import { Users } from './../../../dates/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  public email: any;
  public password: any;
  public user: any;
  public message:any = null;

  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  public logar() {
    Users.users.forEach((item: { email: any; password: any; }) => {
      console.log("entrou funcao", this.user);
      if (item.email == this.email && item.email == null) {
        console.log("primeiro if", this.user);
      }else {
        this.message = "verifique e-mail";
      }if (item.password == this.password && item.password == null) {
        console.log("segundo if", this.user);
      }else {
        this.message = "verifique senha";
      }if (item.email == this.email && item.password == this.password) {
        localStorage.setItem('loggedUser', JSON.stringify(item));
        this.user = localStorage.getItem('loggedUser');
        this.user = JSON.parse(this.user);
        console.log("asdasdasda", this.user);
        this.router.navigate(['/home']);
        // $('#modalLogar').modal('hide');
      }

    });
  }

}
