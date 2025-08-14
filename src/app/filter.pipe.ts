import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      const title = (it && it.data && typeof it.data.title === 'string')
        ? it.data.title
        : (typeof it?.title === 'string' ? it.title : '');
      return title.toLocaleLowerCase().includes(searchText);
    });
  }
}
