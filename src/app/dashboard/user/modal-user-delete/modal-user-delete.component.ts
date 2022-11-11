import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GlobalService } from './../../../core/services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-user-delete',
  templateUrl: './modal-user-delete.component.html',
  styleUrls: ['./modal-user-delete.component.scss']
})
export class ModalUserDeleteComponent implements OnInit {


  constructor(public globalService: GlobalService,public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
  }

  deleteUser() {
    this.globalService.entityName = "user/" + this.config.data.userDatas.id;
    this.globalService.deleteResource().subscribe(response => {
      console.log('oq tem aqui', response)
      this.ref.close();
    })
  }

}
