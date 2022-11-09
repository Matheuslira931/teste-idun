import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouting } from './dashboard-routing.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRouting)
  ]
})
export class DashboardModule { }
