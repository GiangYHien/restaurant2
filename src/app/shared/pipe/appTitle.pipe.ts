import { Pipe, PipeTransform, OnInit } from '@angular/core';
import { map, Observable, startWith, finalize, takeWhile, timer } from 'rxjs';
import { User } from 'src/app/authors';
@Pipe({ name: 'appTitle' })
export class AppTitlePipe implements PipeTransform {
    transform(
        resourceId: string,
        addText: string = "Add",
        editText: string = "Edit"
      ): string {
        return resourceId ? editText : addText;
      }
  }
  @Pipe({
    name: 'isAdult',
  })
  export class IsAdultPipe implements PipeTransform {
    transform(arr: User[]): User[] {
      return arr.filter((x) => x.age > 18);
    }
  }
