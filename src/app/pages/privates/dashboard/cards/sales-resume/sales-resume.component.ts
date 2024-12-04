import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GeneralComponent } from './general/general.component';
import { GananciasComponent } from './ganancias/ganancias.component';
import { GastosComponent } from './gastos/gastos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

@Component({
  selector: 'app-sales-resume',
  imports: [
    UpperCasePipe,
    MatButtonModule,
    MatIconModule,
    GeneralComponent,
    GananciasComponent,
    GastosComponent,
    EstadisticasComponent,
  ],
  templateUrl: './sales-resume.component.html',
  styleUrl: './sales-resume.component.css',
})
export class SalesResumeComponent {}
