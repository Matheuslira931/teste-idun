import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BotaoDefultComponent } from './botao-defult/botao-defult.component';


@NgModule({
  declarations: [
    BotaoDefultComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BotaoDefultComponent
  ]
})
export class BotaoDefultModule { }
