import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }
  restaurantItem = {
    name: "",
    email: "",
    password: "",
  };
  name: string = "";

  ngOnInit(): void {
  }
  getValue(value: string, type: string): void {
    switch (type) {
      case 'name':
        this.restaurantItem.name = value;
        break;
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
  onClickSignUp(): void {
    this.http.post('http://localhost:3000/users', {
      name: this.restaurantItem.name,
      email: this.restaurantItem.email,
      password: this.restaurantItem.password,
    }
    ).subscribe(response => {
      if (response) {
        localStorage.setItem('user-info', JSON.stringify(response));
        this.route.navigate(['']);
      }
    });
  }

}
