import { Component } from '@angular/core';
import { Book } from '../model/Book';
import { BookComponent } from './book/book.component';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { books } from '../model/Books';

@Component({
  selector: 'app-books',
  imports: [CommonModule, BookComponent, MatDividerModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {
  books: Book[];

  constructor() {
    this.books = books;
  }
}