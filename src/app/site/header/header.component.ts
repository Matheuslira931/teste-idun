import { ModalSignComponent } from './modal-sign/modal-sign.component';
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

  modalLogin() {
    this._ref = this.dialogService.open(ModalLoginComponent, {
      header: 'LOGIN',
      closeOnEscape: false,
      styleClass: 'dialog-login',
    });
  }

  modalSign() {
    this._ref = this.dialogService.open(ModalSignComponent, {
      header: 'REGISTRAR',
      closeOnEscape: false,
      styleClass: 'dialog-sign',
    });
  }

  public logout() {
    localStorage.clear();
    window.location.reload();
  }
}
