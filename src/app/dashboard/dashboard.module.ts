import { IconModule } from './../shared/components/icons/icon.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonsModule } from './../shared/components/buttons/buttons.module';
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
    ButtonsModule,
    IconModule,
    RouterModule.forChild(DashboardRouting)
  ]
})
export class DashboardModule {

}
