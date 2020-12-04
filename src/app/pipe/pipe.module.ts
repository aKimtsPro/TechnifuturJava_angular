import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerPipe } from './answer.pipe';

@NgModule({
  declarations: [	
    AnswerPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnswerPipe
  ]
})
export class PipeModule { }
