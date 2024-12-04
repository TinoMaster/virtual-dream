import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const AppRoutes = {
  public: {
    register: 'register',
    login: 'login',
    home: 'home',
  },
  private: {
    root: 'private',
    dashboard: 'dashboard',
    sales: 'sales',
    inventory: 'inventory',
    employees: 'employees',
    clients: 'clients',
    store: 'store',
    reports: 'reports',
  },
};

export const routes: Routes = [
  {
    path: AppRoutes.public.home,
    loadComponent: () =>
      import('./pages/public/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: AppRoutes.public.register,
    loadComponent: () =>
      import('./pages/public/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: AppRoutes.public.login,
    loadComponent: () =>
      import('./pages/public/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: AppRoutes.private.root,
    canActivateChild: [authGuard],
    loadChildren: () =>
      import('./pages/privates/private.routes').then((m) => m.privateRoutes),
  },
  {
    path: '',
    redirectTo: AppRoutes.private.root,
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
