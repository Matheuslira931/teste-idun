import { BotaoDefultModule } from './../shared/components/botao-defult/botao-defult.module';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
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
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BotaoDefultModule,
    DynamicDialogModule,
    RouterModule.forChild(SiteRouting)
  ],
  exports: [SiteComponent]
})
export class SiteModule { }
