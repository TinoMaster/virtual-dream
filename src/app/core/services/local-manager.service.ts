import { inject, Injectable } from '@angular/core';
import { CheckPlatformUtility } from '../utilities';

export enum LocalKeys {
  token = 'token',
}

@Injectable({
  providedIn: 'root',
})
export class LocalManagerService {
  checkPlatform = inject(CheckPlatformUtility);

  getElement(key: LocalKeys): string | null {
    if (this.checkPlatform.checkIfBrowser()) return localStorage.getItem(key);
    return null;
  }

  setElement(key: LocalKeys, value: string): void {
    if (this.checkPlatform.checkIfBrowser()) localStorage.setItem(key, value);
  }

  clearStorage(): void {
    if (this.checkPlatform.checkIfBrowser()) localStorage.clear();
  }
}
