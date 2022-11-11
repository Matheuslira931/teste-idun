import { ModalLoginComponent } from './header/modal-login/modal-login.component';
import { IconModule } from './../shared/components/icons/icon.module';
import { ButtonsModule } from './../shared/components/buttons/buttons.module';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRouting } from './site-routing.module';
import { SiteComponent } from './site.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SiteComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ModalLoginComponent
  ],
  imports: [
    CommonModule,
    DynamicDialogModule,
    IconModule,
    ButtonsModule,
    FormsModule,
    RouterModule.forChild(SiteRouting)
  ]
})

export class SiteModule {

}
