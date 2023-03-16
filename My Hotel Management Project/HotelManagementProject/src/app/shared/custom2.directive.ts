import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom2]'
})
export class Custom2Directive {

  constructor(private element:ElementRef) { }
  @HostListener('input',['$event']) onchange(){
    this.element.nativeElement.value=this.element.nativeElement.value.replace(/[^0-9]/g,' ')
  }
}
