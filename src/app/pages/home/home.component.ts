import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { SalesResumeComponent } from './cards/sales-resume/sales-resume.component';
import { InventoryResumeComponent } from './cards/inventory-resume/inventory-resume.component';
import { EmployeesResumeComponent } from './cards/employees-resume/employees-resume.component';
import { ReportsResumeComponent } from './cards/reports-resume/reports-resume.component';
import { ClientsResumeComponent } from './cards/clients-resume/clients-resume.component';

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
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
