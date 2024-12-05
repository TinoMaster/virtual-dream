import { Component } from '@angular/core';
import { CardComponent } from '@app/shared/components/private';
import {
  ClientsResumeComponent,
  EmployeesResumeComponent,
  InventoryResumeComponent,
  ReportsResumeComponent,
  SalesResumeComponent,
} from './components/cards';

@Component({
  selector: 'app-home',
  imports: [
    CardComponent,
    SalesResumeComponent,
    InventoryResumeComponent,
    EmployeesResumeComponent,
    ReportsResumeComponent,
    ClientsResumeComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
