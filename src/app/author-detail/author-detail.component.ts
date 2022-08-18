import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Author } from '../authors';
@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author = {
    id: 1,
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    gender: 'string',
    ipAddress: 'string',
  };
  @Output() deleteAuthor = new EventEmitter<Author>();
  constructor() { }

  ngOnInit(): void {
  }
  handleDelete(): void {
    this.deleteAuthor.emit(this.author);
  }

}
