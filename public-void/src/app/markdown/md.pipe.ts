import { Pipe, PipeTransform } from '@angular/core';
import { markdown } from 'markdown';
@Pipe({
  name: 'md'
})
export class MdPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return markdown.toHTML(value);
  }

}
