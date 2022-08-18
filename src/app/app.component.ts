import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  title = 'restaurant';
  ngOnInit() {
    this.getConfig();
  }
  getConfig() {
    this.http.get('http://localhost:3000/restaurant')
      .subscribe(response => {
        console.log(response);
      });
  }
}
