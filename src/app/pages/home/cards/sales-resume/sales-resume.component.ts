import { CurrencyPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sales-resume',
  imports: [
    CurrencyPipe,
    TitleCasePipe,
    UpperCasePipe,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './sales-resume.component.html',
  styleUrl: './sales-resume.component.css',
})
export class SalesResumeComponent {}
