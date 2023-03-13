import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirective } from './custom.directive';
import { Custom2Directive } from './custom2.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Custom3Directive } from './custom3.directive';



@NgModule({
  declarations: [
    CustomDirective,
    Custom2Directive,
    Custom3Directive
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CustomDirective,
    Custom2Directive,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Custom3Directive
  ]
})
export class SharedModule { }
