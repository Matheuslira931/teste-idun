import { FormsModule } from '@angular/forms';
import { InputDefaultComponent } from './input-default/input-default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icons/icon.module';



@NgModule({
  declarations: [
    InputDefaultComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    FormsModule,
  ],
  exports: [
    InputDefaultComponent
  ]
})
export class InputModule { }
