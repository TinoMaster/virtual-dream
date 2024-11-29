import { NavLinks } from '../types/global.types';

export const APPLICATION_TITLE = 'Sueño Virtual';

export const navLinks: NavLinks[] = [
  {
    name: 'inicio',
    route: 'home',
    icon: 'dashboard',
  },
  {
    name: 'ventas',
    route: 'sales',
    icon: 'paid',
  },
  {
    name: 'inventario',
    route: 'inventory',
    icon: 'inventory',
  },
  {
    name: 'empleados',
    route: 'employees',
    icon: 'engineering',
  },
  {
    name: 'clientes',
    route: 'clients',
    icon: 'groups',
  },
  {
    name: 'tienda',
    route: 'store',
    icon: 'store',
  },
  {
    name: 'reportes',
    route: 'reports',
    icon: 'assessment',
  },
];

export const authLinks: NavLinks[] = [
  {
    name: 'Login',
    route: 'login',
  },
  {
    name: 'Register',
    route: 'register',
  },
];
