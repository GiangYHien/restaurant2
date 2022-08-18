import { Component, OnInit } from '@angular/core';
import { finalize, map, Observable, startWith, takeWhile, timer } from 'rxjs';
import { User } from '../authors';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  users: User[] = [
    {
      name: "Tiep Phan",
      age: 30
    },
    {
      name: "Trung Vo",
      age: 28
    },
    {
      name: "Chau Tran",
      age: 29
    },
    {
      name: "Tuan Anh",
      age: 16
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  userIdChangeAfterFiveSeconds = '14324';
  time$: Observable<number> = timer(0, 1000).pipe(
    map((val) => 5 - (val + 1)),
    startWith(5),
    finalize(() => {
      this.userIdChangeAfterFiveSeconds = '';
    }),
    takeWhile((val) => val >= 0)
  );

}
