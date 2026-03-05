import { Component, Input } from '@angular/core';
import type { BookHighlight } from '../../model/BookHighlight';

@Component({
  selector: 'app-highlight',
  imports: [],
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss', '../home.component.scss']
})
export class HighlightComponent {
  @Input() bookHighlight!: BookHighlight;
}
