import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'sales',
    loadComponent: () =>
      import('./pages/sales/sales.component').then((m) => m.SalesComponent),
  },
  {
    path: 'inventory',
    loadComponent: () =>
      import('./pages/inventory/inventory.component').then(
        (m) => m.InventoryComponent
      ),
  },
  {
    path: 'employees',
    loadComponent: () =>
      import('./pages/employees/employees.component').then(
        (m) => m.EmployeesComponent
      ),
  },
  {
    path: 'clients',
    loadComponent: () =>
      import('./pages/clients/clients.component').then(
        (m) => m.ClientsComponent
      ),
  },
  {
    path: 'store',
    loadComponent: () =>
      import('./pages/store/store.component').then((m) => m.StoreComponent),
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./pages/reports/reports.component').then(
        (m) => m.ReportsComponent
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () =>
      import(
        './shared/components/page-not-found/page-not-found.component'
      ).then((m) => m.PageNotFoundComponent),
  },
];
