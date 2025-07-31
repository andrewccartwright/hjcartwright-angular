import { Component } from '@angular/core';
import { HighlightComponent } from './highlight/highlight.component';
import type { BookHighlight } from '../model/BookHighlight';
import { books } from '../model/Books';
import { CommonModule } from '@angular/common';
import { MeetMeComponent } from "./meet-me/meet-me.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, HighlightComponent, MeetMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  highlights: BookHighlight[]

  constructor() {
    const currentRelease = books[books.length - 1];
    this.highlights = [
      {
        book: currentRelease,
        title: 'New Release!',
        highlight: `${currentRelease.title}, book ${currentRelease.order.toLowerCase()} of ${currentRelease.seriesTitle}, is now available!`
      }
    ]
  }
}
