import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-resume',
  imports: [TitleCasePipe],
  templateUrl: './employees-resume.component.html',
  styleUrl: './employees-resume.component.css',
})
export class EmployeesResumeComponent {}
