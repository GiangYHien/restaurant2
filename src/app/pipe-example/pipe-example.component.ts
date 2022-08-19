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
  user: User;
  constructor() { 
    this.user = new User();
  }


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
  getValue(value: any, type: string): void {
    switch (type) {
      case 'name':
        this.user.name = value;
        break;
      case 'age':
        this.user.age = Number(value);
        break;
      default:
        console.log(type);
    }
  }
  addUser(): void {
   /*  if(this.user.name !== '' && this.user.age > 0 ){
      this.users= [...this.users, this.user]
      this.user = new User();
    } */
    this.users = [...this.users, this.user];
    this.user = new User();
  }
}
