import { Component } from '@angular/core';
import { CardComponent } from "../../shared/components/card/card.component";
import { SalesResumeComponent } from "./cards/sales-resume/sales-resume.component";

@Component({
  selector: 'app-home',
  imports: [CardComponent, SalesResumeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
