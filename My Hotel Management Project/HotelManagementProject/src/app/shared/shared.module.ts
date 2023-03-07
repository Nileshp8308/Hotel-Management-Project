import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirective } from './custom.directive';
import { Custom2Directive } from './custom2.directive';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CustomDirective,
    Custom2Directive
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    CustomDirective,
    Custom2Directive,
    HttpClientModule
  ]
})
export class SharedModule { }
