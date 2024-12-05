import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  title = input<string>('');
  background = input<string>('#fff');
  colorText = input<string>('#6C757D');
}
