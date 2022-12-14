import { Component, OnInit } from '@angular/core';
import { authors, Author } from '../authors';
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  constructor() { }

  ngOnInit(): void {
  }
  handleDelete(author: Author): void {
    this.authors = this.authors.filter((item) => item.id !== author.id);
  }

}
