import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(userCollection: any, str?: any): any {
    if (str) return userCollection.filter(
      u => String(u.name).startsWith(str)
        || String(u.codename).startsWith(str)
    );
    return userCollection;
  }

}
