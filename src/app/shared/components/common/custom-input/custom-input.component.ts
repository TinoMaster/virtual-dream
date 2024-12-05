import { Component, input } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  imports: [ReactiveFormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css',
})
export class CustomInputComponent {
  control = input.required<AbstractControl<string, string> | null>();
  label = input.required<string>();
  type = input.required<string>();
  placeholder = input.required<string>();
  errorMessage = input.required<string>();
}
