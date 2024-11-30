import { CurrencyPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gastos',
  imports: [
    UpperCasePipe,
    TitleCasePipe,
    CurrencyPipe,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css',
})
export class GastosComponent {}
