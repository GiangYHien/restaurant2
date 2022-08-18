import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToggleComponent } from '../toggle/toggle.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('toggleComp')
  toggleComp!: ToggleComponent;
  toggleInside() {
    this.toggleComp.toggle();
  }
  questions = {
    question1: true,
    question2: true,
  }
  checked: boolean = true;
  restaurantItem = {
    email: "",
    password: "",
  };
  user = {
    name: "giang",
    age: 10
  }
  authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    // more data
  ];
  constructor(
    private http: HttpClient,
    private route: Router
  ) { }
  getValue(value: string, type: string): void {
    switch (type) {
      case 'email':
        this.restaurantItem.email = value;
        break;
      case 'password':
        this.restaurantItem.password = value;
        break;
      default:
        console.log(type);
    }
  }
  onClickLogin(): void {
    this.http.get(`http://localhost:3000/users?email=${this.restaurantItem.email}&password=${ this.restaurantItem.password}`).subscribe(response => {
      if (response) {
        localStorage.setItem('user-info', JSON.stringify(response));
        this.route.navigate(['']);
      }
    });
  }
  handleDelete(checkedChild: boolean): void {
    console.log('checkedChild' + checkedChild);
    console.log('checked' + this.checked);
  }
  ngOnInit(): void {
  }

}
