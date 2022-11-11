import { GlobalService } from './../../core/services/global.service';
import { ModalUserDeleteComponent } from './modal-user-delete/modal-user-delete.component';
import { ModalUserAddComponent } from './modal-user-add/modal-user-add.component';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';

import { Users } from './../../dates/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [DialogService]
})
export class UserComponent implements OnInit {

  public users: any = [];

  constructor(public dialogService: DialogService, public globalService: GlobalService) { }

  private _ref: DynamicDialogRef | any;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.globalService.entityName = "user";
    this.globalService.getResources().subscribe(response => {
      this.users = response;
    })
  }

  showModalUserAdd() {
    this._ref = this.dialogService.open(ModalUserAddComponent, {
      header: 'ADICIONAR USUÁRIO',
      closeOnEscape: false,
      styleClass: 'dialog-addUser',
      data: {
        'newUser': true
      }
    });
    this._ref.onClose.subscribe((response:any) => {
      this.getUsers();
    });
  }

  showModalUserEdit(userInf:any) {
    this._ref = this.dialogService.open(ModalUserAddComponent, {
      header: 'EDITOR USUÁRIO',
      closeOnEscape: false,
      styleClass: 'dialog-editUser',
      data: {
        'editUser': true,
        'userDatas': userInf
      }
    });
    this._ref.onClose.subscribe((response:any) => {
      this.getUsers();
    });
  }

  showModalUserDelete(userInf:any) {
    this._ref = this.dialogService.open(ModalUserDeleteComponent, {
      header: 'DELETAR USUÁRIO',
      closeOnEscape: false,
      styleClass: 'dialog-deleteUser',
      data: {
        'userDatas': userInf
      }
    });
    this._ref.onClose.subscribe((response:any) => {
      this.getUsers();
    });
  }

}
