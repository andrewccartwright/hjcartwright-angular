import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../../model/Book';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-book-details',
  imports: [CommonModule, MatDividerModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent implements AfterViewInit {
  @ViewChild('bookDescription') bookDescription!: ElementRef;

  book$: Observable<Book>;

  constructor(public activatedRoute: ActivatedRoute) { 
    this.book$ = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state.book)
    );
  }

  ngAfterViewInit(): void {
    this.book$.subscribe(book => {
      console.log(book);

      console.log(this.bookDescription);
      this.bookDescription.nativeElement.innerHTML = book.description;
    })
  }
}
