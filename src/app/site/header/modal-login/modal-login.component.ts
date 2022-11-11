import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { GlobalService } from './../../../core/services/global.service';
import { Router } from '@angular/router';

import { Users } from './../../../dates/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  public name: any
  public email: any;
  public password: any;
  public users: any = [];
  public message:any = null;
  public hasUser:any = null;

  constructor(public router : Router, public globalService: GlobalService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.name = this.config.data.name;
    this.email = this.config.data.email;
  }

  public logar() {
    this.globalService.entityName = 'user';
    this.globalService.getResources().subscribe((response:any) => {
      this.hasUser = response.filter((user:any) => user.email == this.email && user.password == this.password);
      if (this.hasUser.length > 0) {
        console.log("oq tem aqui", this.hasUser);
        this.ref.close();
        localStorage.setItem('loggedUser', JSON.stringify(this.hasUser));
        this.router.navigate(['/home']);
      }
    })
    // .users.forEach((item: { email: any; password: any; }) => {
    //   if (item.email == this.email && item.email == null) {
    //   }else {
    //     this.message = "verifique e-mail";
    //   }if (item.password == this.password && item.password == null) {
    //   }else {
    //     this.message = "verifique senha";
    //   if (item.email == this.email && item.password == this.password) {
    //     this.globalService.entityName = 'user/' + this.config.data.userDatas.id;
    //     this.globalService.getResources().subscribe(response => {
    //       this.ref.close();
    //       localStorage.setItem('loggedUser', JSON.stringify(item));
    //       this.router.navigate(['/home']);
    //     })
    //   }
    // }


    // Users.users.forEach((item: { email: any; password: any; }) => {
    //   if (item.email == this.email && item.email == null) {
    //   }else {
    //     this.message = "verifique e-mail";
    //   }if (item.password == this.password && item.password == null) {
    //   }else {
    //     this.message = "verifique senha";
    //   }if (item.email == this.email && item.password == this.password) {
    //     localStorage.setItem('loggedUser', JSON.stringify(item));
    //     this.user = localStorage.getItem('loggedUser');
    //     this.user = JSON.parse(this.user);
    //     this.router.navigate(['/home']);
    //     // $('#modalLogar').modal('hide');
    //   }

    // });
  }

}
