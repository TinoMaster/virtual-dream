import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthDataModel, LoginResponseModel } from '@core/models';
import { encodeRole } from '../utilities';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseAuthUrl = environment.AUTH_URL;
  http = inject(HttpClient);
  router = inject(Router);
  snackbar = inject(SnackbarService);

  login(user: AuthDataModel): void {
    this.http
      .post<LoginResponseModel>(`${this.baseAuthUrl}/authenticate`, user)
      .subscribe({
        next: (response) => {
          localStorage.setItem('token', response.refreshToken);
          localStorage.setItem('role', encodeRole(response.role));
          this.router.navigate(['/']);
        },
        error: () => {
          this.snackbar.open('Credenciales incorrectas');
        },
      });
  }

  register(user: AuthDataModel): Observable<void> {
    return this.http.post<void>(`${this.baseAuthUrl}/register`, user);
  }
}
