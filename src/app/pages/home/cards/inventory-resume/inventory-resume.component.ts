import { PercentPipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { UnitPipe } from '../../../../shared/pipes/unit.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-inventory-resume',
  imports: [
    UnitPipe,
    TitleCasePipe,
    PercentPipe,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './inventory-resume.component.html',
  styleUrl: './inventory-resume.component.css',
})
export class InventoryResumeComponent {}
