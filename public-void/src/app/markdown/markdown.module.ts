import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdPipe } from './md.pipe';

@NgModule({
  declarations: [
    MdPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MdPipe
  ]
})
export class MarkdownModule { }
