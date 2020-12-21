import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubstrPipe } from './substr.pipe';
import { PosterPipe } from './poster.pipe';



@NgModule({
  declarations: [SubstrPipe, PosterPipe],
  imports: [
    CommonModule
  ],
  exports: [
    SubstrPipe, PosterPipe,
  ]
})
export class PipesModule { }
