import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '@app/shared/components/private/layout/layout.component';

@Component({
  selector: 'app-privates',
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './privates.component.html',
  styleUrl: './privates.component.css',
})
export class PrivatesComponent {}
