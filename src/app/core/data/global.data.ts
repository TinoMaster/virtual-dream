import { NavLinks, SocialMediaLinks } from '../types/global.types';

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
