import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckPlatformUtility {
  /* PLATFORM_ID es un objeto que nos permite saber en que plataforma estamos, en especifico, o en el navegador o en el servidor */
  private platformId = inject(PLATFORM_ID);

  checkIfBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  checkIfServer(): boolean {
    return isPlatformServer(this.platformId);
  }
}
