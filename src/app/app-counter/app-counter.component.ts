import { Component, OnInit } from '@angular/core';
let _id = 1;
@Component({
  selector: 'app-app-counter',
  templateUrl: './app-counter.component.html',
  styleUrls: ['./app-counter.component.css']
})
export class AppCounterComponent implements OnInit {
  id = _id++;
  constructor() { }

  ngOnInit(): void {
  }

}
