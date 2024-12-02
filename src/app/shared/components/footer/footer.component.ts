import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {
  footerDescription,
  navLinks,
  socialContacts,
} from '@app/core/data/global.data';
import { NavLinks, SocialMediaLinks } from '@app/core/types/global.types';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, MatIconModule, NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  pageLinks!: NavLinks[];
  description!: string;
  socialMediaLinks!: SocialMediaLinks[];
  email!: string;
  phone!: string;

  ngOnInit(): void {
    this.pageLinks = navLinks;
    this.description = footerDescription;
    this.socialMediaLinks = socialContacts;
    this.email = '4qLpO@example.com';
    this.phone = '333 333 333';
  }
}
