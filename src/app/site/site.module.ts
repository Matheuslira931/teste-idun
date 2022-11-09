import { ButtonsModule } from './../shared/components/buttons/buttons.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
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

import { faSquare } from '@fortawesome/free-solid-svg-icons';
import {
  faSquare as farSquare
} from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
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
    DynamicDialogModule,
    FontAwesomeModule,
    ButtonsModule,
    RouterModule.forChild(SiteRouting)
  ],
  exports: [SiteComponent]
})

export class SiteModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faGithub, faFacebook, faLinkedin, faWhatsapp);
  }
}
