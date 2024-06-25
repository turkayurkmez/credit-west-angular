import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: Project[], searchContent: string): Project[] {
    return searchContent != undefined ? 
        value.filter((p) => p.name?.toLowerCase().includes(searchContent.toLowerCase()))
      : value;
  }
}
