import { CurrencyPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-estadisticas',
  imports: [
    UpperCasePipe,
    TitleCasePipe,
    CurrencyPipe,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css',
})
export class EstadisticasComponent {}
