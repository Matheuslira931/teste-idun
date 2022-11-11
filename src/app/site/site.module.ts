import { InputModule } from './../shared/components/input/input.module';
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
import { ModalSignComponent } from './header/modal-sign/modal-sign.component';

@NgModule({
  declarations: [
    SiteComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ModalLoginComponent,
    ModalSignComponent
  ],
  imports: [
    CommonModule,
    DynamicDialogModule,
    IconModule,
    ButtonsModule,
    InputModule,
    FormsModule,
    RouterModule.forChild(SiteRouting)
  ]
})

export class SiteModule {

}
