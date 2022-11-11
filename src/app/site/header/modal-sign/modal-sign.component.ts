import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { GlobalService } from './../../../core/services/global.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-sign',
  templateUrl: './modal-sign.component.html',
  styleUrls: ['./modal-sign.component.scss']
})
export class ModalSignComponent implements OnInit {

  public name: any
  public email: any;
  public password: any;
  public users: any = [];
  public message:any = null;

  constructor(public router : Router, public globalService: GlobalService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

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
    this.globalService.entityName = `user`;
    this.globalService.createResource(body).subscribe(
      (response:any) => {
        this.ref.close();
        this.router.navigate(['/home']);
      },
    );
  }

}
