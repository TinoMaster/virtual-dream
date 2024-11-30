import { CurrencyPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-general',
  imports: [
    UpperCasePipe,
    TitleCasePipe,
    CurrencyPipe,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css',
})
export class GeneralComponent {}
