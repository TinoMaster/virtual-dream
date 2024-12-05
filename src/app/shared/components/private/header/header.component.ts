import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { APPLICATION_TITLE, authLinks } from '@core/data';
import { NavLinks } from '@app/core/types';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title!: string;
  authLinks!: NavLinks[];

  ngOnInit(): void {
    this.title = APPLICATION_TITLE;
    this.authLinks = authLinks;
  }
}
