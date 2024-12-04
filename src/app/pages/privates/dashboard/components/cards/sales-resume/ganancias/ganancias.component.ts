import { CurrencyPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ganancias',
  imports: [
    UpperCasePipe,
    TitleCasePipe,
    CurrencyPipe,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './ganancias.component.html',
  styleUrl: './ganancias.component.css',
})
export class GananciasComponent {}
