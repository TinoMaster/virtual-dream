import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { SalesResumeComponent } from './cards/sales-resume/sales-resume.component';
import { InventoryResumeComponent } from './cards/inventory-resume/inventory-resume.component';

@Component({
  selector: 'app-home',
  imports: [CardComponent, SalesResumeComponent, InventoryResumeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
