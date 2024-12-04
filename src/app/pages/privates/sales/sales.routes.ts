import { Routes } from '@angular/router';

export const salesRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./sales.component').then((m) => m.SalesComponent),
  },
];
