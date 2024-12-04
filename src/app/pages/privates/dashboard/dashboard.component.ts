import { Component } from '@angular/core';
import { CardComponent } from '@app/shared/components/card/card.component';
import { SalesResumeComponent } from './components/cards/sales-resume/sales-resume.component';
import { InventoryResumeComponent } from './components/cards/inventory-resume/inventory-resume.component';
import { EmployeesResumeComponent } from './components/cards/employees-resume/employees-resume.component';
import { ReportsResumeComponent } from './components/cards/reports-resume/reports-resume.component';
import { ClientsResumeComponent } from './components/cards/clients-resume/clients-resume.component';

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
