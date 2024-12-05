import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {
  OptionForPrincipalTableComponent,
  TableComponent,
} from '@app/shared/components/private';

@Component({
  selector: 'app-sales',
  imports: [
    MatCardModule,
    MatTableModule,
    TableComponent,
    OptionForPrincipalTableComponent,
  ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css',
})
export class SalesComponent {
  displayedColumns: string[] = [
    'order',
    'dueDate',
    'status',
    'client',
    'group',
  ];
  dataSource = [
    {
      order: 'A123',
      dueDate: new Date(),
      status: 'In Progress',
      client: 'John Doe',
      group: 'Tablets',
    },
    {
      order: 'A124',
      dueDate: new Date(),
      status: 'Completed',
      client: 'Jane Smith',
      group: 'Laptops',
    },
    {
      order: 'A125',
      dueDate: new Date(),
      status: 'Pending',
      client: 'Alex Green',
      group: 'Smartphones',
    },
    {
      order: 'A123',
      dueDate: new Date(),
      status: 'In Progress',
      client: 'John Doe',
      group: 'Tablets',
    },
    {
      order: 'A124',
      dueDate: new Date(),
      status: 'Completed',
      client: 'Jane Smith',
      group: 'Laptops',
    },
    {
      order: 'A125',
      dueDate: new Date(),
      status: 'Pending',
      client: 'Alex Green',
      group: 'Smartphones',
    },
    {
      order: 'A123',
      dueDate: new Date(),
      status: 'In Progress',
      client: 'John Doe',
      group: 'Tablets',
    },
    {
      order: 'A124',
      dueDate: new Date(),
      status: 'Completed',
      client: 'Jane Smith',
      group: 'Laptops',
    },
    {
      order: 'A125',
      dueDate: new Date(),
      status: 'Pending',
      client: 'Alex Green',
      group: 'Smartphones',
    },
    {
      order: 'A123',
      dueDate: new Date(),
      status: 'In Progress',
      client: 'John Doe',
      group: 'Tablets',
    },
    {
      order: 'A124',
      dueDate: new Date(),
      status: 'Completed',
      client: 'Jane Smith',
      group: 'Laptops',
    },
    {
      order: 'A125',
      dueDate: new Date(),
      status: 'Pending',
      client: 'Alex Green',
      group: 'Smartphones',
    },
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'In Progress':
        return 'badge bg-warning';
      case 'Completed':
        return 'badge bg-success';
      case 'Pending':
        return 'badge bg-secondary';
      default:
        return 'badge bg-light';
    }
  }

  filteredFunction(str: string): void {}
}
