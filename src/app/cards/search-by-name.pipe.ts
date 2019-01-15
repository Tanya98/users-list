import { Pipe, PipeTransform } from '@angular/core';
import { IUsers } from '../data.service';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(users: IUsers[], value: string): any {
    if (!value) {
      return users;
    }
    return users.filter((user) => {
      return user.name.first.toLowerCase()
        .includes(value.toLowerCase());
    });
  }
}
