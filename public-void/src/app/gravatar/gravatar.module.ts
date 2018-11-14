import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GravatarComponent } from './gravatar/gravatar.component';

@NgModule({
  declarations: [
    GravatarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GravatarComponent
  ]
})
export class GravatarModule { }
