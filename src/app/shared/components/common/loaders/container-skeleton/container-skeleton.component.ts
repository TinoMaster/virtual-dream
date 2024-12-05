import { Component, input } from '@angular/core';

@Component({
  selector: 'app-container-skeleton',
  imports: [],
  templateUrl: './container-skeleton.component.html',
  styleUrl: './container-skeleton.component.css',
})
export class ContainerSkeletonComponent {
  rowCount = input<number>(5);

  get rows() {
    return Array(this.rowCount);
  }
}
