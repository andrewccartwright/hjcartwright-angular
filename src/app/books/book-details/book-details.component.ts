import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../../model/Book';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-book-details',
  imports: [CommonModule, MatDividerModule, RouterLink, RouterLinkActive],
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
      this.bookDescription.nativeElement.innerHTML = book.description;
    });
  }
}
