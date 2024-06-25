import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'read'
})
export class ReadPipe implements PipeTransform {

  transform(value: number): string {
     let ones :string[] = ["","bir","iki","üç","dört","beş","altı","yedi","sekiz","dokuz"] ;
     let tens :string[] = ["","on","yirmiş","otuz","kırk","elli","altmış","yetmiş","seksen","doksan"] ;

     let indexOne = value % 10;
     let indexTen = Math.floor(value / 10);




     return tens[indexTen] + " "+ ones[indexOne];


  }

}
