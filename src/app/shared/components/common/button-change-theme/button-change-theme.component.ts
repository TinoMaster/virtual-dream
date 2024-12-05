import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-change-theme',
  imports: [MatIconModule],
  templateUrl: './button-change-theme.component.html',
  styleUrl: './button-change-theme.component.css',
})
export class ButtonChangeThemeComponent implements OnInit {
  isDarkThemeActive: boolean = false;

  ngOnInit(): void {
    const storedTheme = localStorage.getItem('isDarkThemeActive');
    this.isDarkThemeActive = storedTheme === 'true';
    document.body.classList.toggle('dark-theme', this.isDarkThemeActive);
  }

  toggleTheme(): void {
    this.isDarkThemeActive = !this.isDarkThemeActive;
    document.body.classList.toggle('dark-theme', this.isDarkThemeActive);
    localStorage.setItem(
      'isDarkThemeActive',
      this.isDarkThemeActive.toString()
    );
  }
}
