import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  imports: [
    MatTableModule,
    MatPaginator,
    NgIf,
    NgFor,
    TitleCasePipe,
    MatIconModule,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit, OnChanges {
  @Input({ required: true }) dataSource: any[] = [];
  @Input() tableTitle = '';
  @Input({ required: true }) displayedColumns: string[] = [];
  @Input() onView = (id: number) => {};
  @Input() onEdit = (id: number) => {};
  @Input() onDelete = (id: number) => {};

  data = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource']) {
      this.data.data = this.dataSource;
      if (this.paginator) {
        this.data.paginator = this.paginator;
      }
    }
  }

  ngAfterViewInit(): void {
    this.data.paginator = this.paginator;
  }
}
