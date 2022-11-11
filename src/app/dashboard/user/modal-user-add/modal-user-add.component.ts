import { GlobalService } from './../../../core/services/global.service';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-modal-user-add',
  templateUrl: './modal-user-add.component.html',
  styleUrls: ['./modal-user-add.component.scss']
})
export class ModalUserAddComponent implements OnInit {

  public name: any
  public email: any;
  public password: any;
  public users: any = [];
  public message:any = null;

  constructor(public globalService: GlobalService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.name = this.config.data.name;
    this.email = this.config.data.email;
  }

  creatUser() {
    let body = {
      "name": this.name,
      "email": this.email,
      "password": this.password
    }

    if(this.config.data.newUser) {
      this.config.data.newUser
      this.globalService.entityName = `user`;
      this.globalService.createResource(body).subscribe(
        (response:any) => {
          this.ref.close();
        },
      );
    }if(this.config.data.editUser) {
      this.globalService.entityName = 'user/' + this.config.data.userDatas.id;
      this.globalService.patchResource(body).subscribe(
        (response:any) => {
          this.ref.close();
        });
    }
  }

}
