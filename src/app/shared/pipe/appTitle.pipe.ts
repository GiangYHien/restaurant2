import { Pipe, PipeTransform, OnInit } from '@angular/core';
import { map, Observable, startWith, finalize, takeWhile, timer } from 'rxjs';
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
