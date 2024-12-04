import { Routes } from "@angular/router";

export const clientsRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./clients.component').then((m) => m.ClientsComponent),
    },
];