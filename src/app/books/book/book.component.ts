import { Component, Input } from '@angular/core';
import { Book } from '../../model/Book';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-book',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  @Input() book!: Book;
}
