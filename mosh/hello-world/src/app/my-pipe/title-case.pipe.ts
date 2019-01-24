import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string, option: any) {
    if (!value) {
      return null;
    }
    const mystring = 'The Rise of the Planet of the Apes';
    const preposition = ['of', 'the'];
    const spiltString: string[] = value.split(' ');
    for (let i = 0; i < spiltString.length; i++) {
        if (!preposition.includes(spiltString[i].toLocaleLowerCase()) {
            spiltString[i] = (spiltString[i] as string).substr(0, 1).toUpperCase() +
            (spiltString[i] as string).substr(1, spiltString[i].length);
        }
    }
    return spiltString.join(' ');
  }
}
