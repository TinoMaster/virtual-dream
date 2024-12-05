import { Routes } from '@angular/router';
import { AppRoutes } from '@app/app.routes';
import { PrivatesComponent } from './privates.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const privateRoutes: Routes = [
  {
    path: '',
    component: PrivatesComponent,
    children: [
      {
        path: AppRoutes.private.dashboard,
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: AppRoutes.private.sales,
        loadChildren: () =>
          import('./sales/sales.routes').then((m) => m.salesRoutes),
      },
      {
        path: AppRoutes.private.inventory,
        loadChildren: () =>
          import('./inventory/inventory.routes').then((m) => m.inventoryRoutes),
      },
      {
        path: AppRoutes.private.employees,
        loadChildren: () =>
          import('./employees/employees.routes').then((m) => m.employeesRoutes),
      },
      {
        path: AppRoutes.private.clients,
        loadChildren: () =>
          import('./clients/clients.routes').then((m) => m.clientsRoutes),
      },
      {
        path: AppRoutes.private.store,
        loadChildren: () =>
          import('./store/store.routes').then((m) => m.storeRoutes),
      },
      {
        path: AppRoutes.private.reports,
        loadChildren: () =>
          import('./reports/reports.routes').then((m) => m.reportsRoutes),
      },
    ],
  },
  {
    path: '',
    redirectTo: AppRoutes.private.dashboard,
    pathMatch: 'full',
  },
];
