import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameFilter'
})
export class GameFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    return performSearch(items, searchText.toLowerCase());
  }
}


function performSearch(items: any[], txt: string) {
  if (txt.length < 2) {
    return;
  }
  return items.filter((e: any, i: number) => {
    if (i > 0) {
      return e.title.toLowerCase().includes(txt);
    }
  });
}
