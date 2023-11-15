import { Component } from '@angular/core';

@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.css']
})
export class ScrollingComponent {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
}
