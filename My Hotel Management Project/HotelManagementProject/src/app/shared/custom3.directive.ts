import { Directive, ElementRef, HostListener } from '@angular/core';
import { ApiService } from '../api.service';

@Directive({
  selector: '[appCustom3]'
})
export class Custom3Directive {

  constructor(private element:ElementRef,private service:ApiService) { }

  @HostListener('input',['$event']) onChange(){
  //   if(!this.element.nativeElement.value){
  //     this.service.dataFromForgotpass=null
  //   }
  //   else{
  //     this.service.dataFromForgotpass=this.element.nativeElement.value
  //   }
   }
}
