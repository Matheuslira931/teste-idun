import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBackgroundComponent } from './button-background/button-background.component';
import { ButtonWithoutBackgroundComponent } from './button-without-background/button-without-background.component';


@NgModule({
  declarations: [
    ButtonBackgroundComponent,
    ButtonWithoutBackgroundComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonBackgroundComponent,
    ButtonWithoutBackgroundComponent
  ]
})
export class ButtonsModule { }
