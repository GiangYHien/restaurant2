import { Component, forwardRef, OnInit } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

const BsTabGroupProvider = {
  provide: TabGroupComponent,
  useExisting: forwardRef(() => BsTabGroupComponent),
};

@Component({
  selector: 'app-bs-tab-group',
  templateUrl: './bs-tab-group.component.html',
  styleUrls: ['./bs-tab-group.component.css'],
  providers: [BsTabGroupProvider],
})
export class BsTabGroupComponent extends TabGroupComponent {}
/* export class BsTabGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

} */
