import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    /* La introducción de withComponentInputBinding nos permite usar el @Input para obtener los parámetros de la URL */
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(withEventReplay()),
    /* La introducción de withFetch nos permite usar el fetch en el HttpClient */
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
  ],
};
