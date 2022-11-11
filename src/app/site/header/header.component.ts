import { ModalLoginComponent } from './modal-login/modal-login.component';
import { Users } from './../../dates/users';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DialogService]
})
export class HeaderComponent implements OnInit {

  private _ref: DynamicDialogRef | any;
  public user: any;

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
    if(localStorage.getItem('loggedUser')){
      this.user = localStorage.getItem('loggedUser');
      this.user = JSON.parse(this.user);
    }
  }

  show() {
    this._ref = this.dialogService.open(ModalLoginComponent, {
      header: 'LOGIN',
      width: '80%',
      height: '80vh',
      closeOnEscape: false,
      styleClass: 'dialog-login',
    });
  }

  public logout() {
    localStorage.clear();
    window.location.reload();
  }
}
