import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faArrowLeft, faArrowsLeftRightToLine, faPlus, faSquare, faTrash, faUser, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import {
  faSquare as farSquare
} from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class IconModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faGithub, faFacebook, faLinkedin, faWhatsapp, faPlus, faWindowMaximize, faArrowsLeftRightToLine, faArrowLeft, faUser, faTrash);
  }
}
