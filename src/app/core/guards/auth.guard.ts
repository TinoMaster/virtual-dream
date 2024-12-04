import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import {
  LocalKeys,
  LocalManagerService,
} from '../services/local-manager.service';
import { AppRoutes } from '@app/app.routes';

export const authGuard: CanActivateChildFn = () => {
  const localManagerService = inject(LocalManagerService);
  const router = inject(Router);
  const token = localManagerService.getElement(LocalKeys.token);

  if (!token) {
    router.navigate([AppRoutes.public.login]);
    return false;
  }

  return true;
};
