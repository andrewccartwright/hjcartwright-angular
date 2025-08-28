import { Component } from '@angular/core';
import { Book } from '../model/Book';
import { BookComponent } from './book/book.component';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { advocatesBooks, standaloneBooks } from '../model/Books';

@Component({
  selector: 'app-books',
  imports: [CommonModule, BookComponent, MatDividerModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {
  advocatesBooks: Book[];
  standaloneBooks: Book[];

  constructor() {
    this.advocatesBooks = advocatesBooks;
    this.standaloneBooks = standaloneBooks;
  }
}