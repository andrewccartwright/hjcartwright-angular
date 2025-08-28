import { Component } from '@angular/core';
import { HighlightComponent } from './highlight/highlight.component';
import type { BookHighlight } from '../model/BookHighlight';
import { currentRelease } from '../model/Books';
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
    this.highlights = [
      {
        book: currentRelease,
        title: 'New Release!',
        highlight: `${currentRelease.title}, coming November 20, 2025!`
      }
    ]
  }
}
