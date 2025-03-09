import { Component, Input } from '@angular/core';
import type { BookHighlight } from '../../model/BookHighlight';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-highlight',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss', '../home.component.scss']
})
export class HighlightComponent {
  @Input() bookHighlight!: BookHighlight;
}
