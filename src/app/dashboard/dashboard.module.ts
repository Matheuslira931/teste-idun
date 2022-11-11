import { FormsModule } from '@angular/forms';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { IconModule } from './../shared/components/icons/icon.module';
import { ButtonsModule } from './../shared/components/buttons/buttons.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouting } from './dashboard-routing.module';
import { UserComponent } from './user/user.component';
import { ModalUserAddComponent } from './user/modal-user-add/modal-user-add.component';
import { ModalUserDeleteComponent } from './user/modal-user-delete/modal-user-delete.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    UserComponent,
    ModalUserAddComponent,
    ModalUserDeleteComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    DynamicDialogModule,
    IconModule,
    TableModule,
    FormsModule,
    RouterModule.forChild(DashboardRouting)
  ]
})
export class DashboardModule {

}
