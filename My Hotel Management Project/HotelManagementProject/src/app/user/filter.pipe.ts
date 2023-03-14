import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchname: any): any {
    if(!value){
     return null; 
    }
    else if(!searchname){
      return  value;
    }
    return value.filter((element:any)=>{
      return JSON.stringify(element).toLowerCase().includes(searchname.toLowerCase())
    })
  }

}
