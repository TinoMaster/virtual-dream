import { Component, input } from '@angular/core';

@Component({
  selector: 'app-table-skeleton',
  imports: [],
  templateUrl: './table-skeleton.component.html',
  styleUrl: './table-skeleton.component.css',
})
export class TableSkeletonComponent {
  rowCount = input<number>(2);

  get rows() {
    return Array(this.rowCount); // Genera un array para iterar en el template
  }
}
