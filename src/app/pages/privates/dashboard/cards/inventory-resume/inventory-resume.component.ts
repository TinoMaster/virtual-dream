import { PercentPipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UnitPipe } from '@app/shared/pipes/unit.pipe';

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
