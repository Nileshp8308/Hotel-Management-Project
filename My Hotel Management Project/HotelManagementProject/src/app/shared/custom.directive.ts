import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private element:ElementRef) { }

  @HostListener('input',['$event']) onchange(){
    this.element.nativeElement.value=this.element.nativeElement.value.replace(/[^a-zA-Z]/g,'')
  }

}
