import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBackgroundComponent } from './button-background/button-background.component';
import { ButtonWithoutBackgroundComponent } from './button-without-background/button-without-background.component';
import { IconModule } from '../icons/icon.module';
import { ButtonHrefBackgroundComponent } from './button-href-background/button-href-background.component';


@NgModule({
  declarations: [
    ButtonBackgroundComponent,
    ButtonWithoutBackgroundComponent,
    ButtonHrefBackgroundComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    ButtonBackgroundComponent,
    ButtonWithoutBackgroundComponent,
    ButtonHrefBackgroundComponent
  ]
})
export class ButtonsModule { }
