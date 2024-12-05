import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ButtonChangeThemeComponent } from '@app/shared/components/common';
import {
  APPLICATION_TITLE,
  authLinks,
  navLinks,
} from '@app/core/data/global.data';
import { NavLinks } from '@app/core/types';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    NgFor,
    MatIconModule,
    MatButtonModule,
    RouterLinkActive,
    UpperCasePipe,
    TitleCasePipe,
    ButtonChangeThemeComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  title!: string;
  navLinks!: NavLinks[];
  authLinks!: NavLinks[];

  ngOnInit(): void {
    this.title = APPLICATION_TITLE;
    this.navLinks = navLinks;
    this.authLinks = authLinks;
  }
}
