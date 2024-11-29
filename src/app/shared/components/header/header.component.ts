import { Component } from '@angular/core';
import { NavLinks } from '../../../core/types/global.types';
import {
  APPLICATION_TITLE,
  authLinks,
  navLinks,
} from '../../../core/data/global.data';
import { RouterLink } from '@angular/router';
import { NgFor, TitleCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgFor, TitleCasePipe, MatButtonModule, MatIconModule],
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
