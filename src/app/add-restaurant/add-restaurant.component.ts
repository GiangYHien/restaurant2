import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }
  restaurantInfo = {
    name: "",
    address: "",
    contact: ""
  };
  getValue(value: string, type: string): void {
    switch (type) {
      case 'name':
        this.restaurantInfo.name = value;
        break;
      case 'address':
        this.restaurantInfo.address = value;
        break;
      case 'contact':
        this.restaurantInfo.contact = value;
        break;
      default:
        console.log(type);
    }
  }
  onClickAddres(): void {
    this.http.post("http://localhost:3000/restaurant", {
      name: this.restaurantInfo.name,
      address: this.restaurantInfo.address,
      contact: this.restaurantInfo.contact
    }).subscribe(response => {
      if (response) {
        this.route.navigate(['']);
      }
    });
  }

  ngOnInit(): void {
  }

}
