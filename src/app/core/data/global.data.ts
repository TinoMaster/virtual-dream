import { AppRoutes } from '@app/app.routes';
import { NavLinks, SocialMediaLinks } from '../types/global.types';

export const APPLICATION_TITLE = 'Sueño Virtual';

export const navLinks: NavLinks[] = [
  {
    name: 'inicio',
    route: `${AppRoutes.private.root}/${AppRoutes.private.dashboard}`,
    icon: 'dashboard',
  },
  {
    name: 'ventas',
    route: `${AppRoutes.private.root}/${AppRoutes.private.sales}`,
    icon: 'paid',
  },
  {
    name: 'inventario',
    route: `${AppRoutes.private.root}/${AppRoutes.private.inventory}`,
    icon: 'inventory',
  },
  {
    name: 'empleados',
    route: `${AppRoutes.private.root}/${AppRoutes.private.employees}`,
    icon: 'engineering',
  },
  {
    name: 'clientes',
    route: `${AppRoutes.private.root}/${AppRoutes.private.clients}`,
    icon: 'groups',
  },
  {
    name: 'tienda',
    route: `${AppRoutes.private.root}/${AppRoutes.private.store}`,
    icon: 'store',
  },
  {
    name: 'reportes',
    route: `${AppRoutes.private.root}/${AppRoutes.private.reports}`,
    icon: 'assessment',
  },
];

export const footerDescription =
  'Bienvenido a nuestra tienda virtual de sueños.';

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

export const socialContacts: SocialMediaLinks[] = [
  {
    name: 'Facebook',
    link: 'https://facebook.com',
    iconName: 'facebook',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com',
    iconName: 'twitter',
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com',
    iconName: 'instagram',
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com',
    iconName: 'LinkedIn',
  },
];
