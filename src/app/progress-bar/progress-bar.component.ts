import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor: string = '';
  @Input() progressColor: string = '';
  private $progress = 0;
  @Input()
  get progress(): number {
    return this.$progress;
  }
  set progress(value: number) {
    if (typeof value !== 'number') {
      const progress = Number(value);
      if (Number.isNaN(progress)) {
        this.$progress = 0;
      } else {
        this.$progress = progress;
      }
    } else {
      this.$progress = value;
    }
  }
  constructor() { 
    console.log("giangdddddddddd");
  }
  name: string = '';

  ngOnInit(): void {
  }

}
