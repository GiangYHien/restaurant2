import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
export interface PeriodicElement {
  name: string;
  id: number;
  address: string;
  contact: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'contact', 'address', 'update'];
  resList: any = [];
  selectedRow: any;
  constructor(
    private http: HttpClient,
    private route:Router
  ) { }

  ngOnInit(): void {
    const userInfo = localStorage.getItem('user-info');
    if (!userInfo) {
      this.route.navigate(['login']);
    }
    this.http.get(`http://localhost:3000/restaurant`).subscribe(response => {
      if (response) {
        this.resList = response;
      }
    });
  }
  highlight(highlighted: boolean) {
    highlighted = !highlighted;
  }

  getSupervisiorRecordFromTable(user: any) {
    this.selectedRow = user;
  }

}
