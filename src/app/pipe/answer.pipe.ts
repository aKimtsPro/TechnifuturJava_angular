import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'answer'
})
export class AnswerPipe implements PipeTransform {

  transform(value: any, plus?:number, args?: any): number {
    return 42 + (plus === undefined ? 0 : plus); 
    // attention valeur defaut d'un param optionnel est undefined
  }

}
