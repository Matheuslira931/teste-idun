import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBackgroundComponent } from './button-background/button-background.component';
import { IconModule } from '../icons/icon.module';
import { ButtonHrefBackgroundComponent } from './button-href-background/button-href-background.component';
import { ButtonActionComponent } from './button-action/button-action.component';


@NgModule({
  declarations: [
    ButtonBackgroundComponent,
    ButtonHrefBackgroundComponent,
    ButtonActionComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    ButtonBackgroundComponent,
    ButtonHrefBackgroundComponent,
    ButtonActionComponent
  ]
})
export class ButtonsModule { }
