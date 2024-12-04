import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AppRoutes } from '@app/app.routes';

@Component({
  selector: 'app-page-not-found',
  imports: [MatButtonModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',
})
export class PageNotFoundComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate([
      `/${AppRoutes.private.root}/${AppRoutes.private.dashboard}`,
    ]);
  }
}
