import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-meet-me',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './meet-me.component.html',
  styleUrls: ['./meet-me.component.scss', '../home.component.scss']
})
export class MeetMeComponent {

}
