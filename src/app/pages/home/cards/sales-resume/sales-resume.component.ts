import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-resume',
  imports: [CurrencyPipe, TitleCasePipe],
  templateUrl: './sales-resume.component.html',
  styleUrl: './sales-resume.component.css',
})
export class SalesResumeComponent {}
