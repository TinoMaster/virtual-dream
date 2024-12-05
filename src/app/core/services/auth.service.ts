import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthDataModel, LoginResponseModel } from '@core/models';
import { AuthAdapter } from '@core/adapters';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseAuthUrl = environment.AUTH_URL;
  http = inject(HttpClient);

  login(user: AuthDataModel): Observable<string> {
    return this.http
      .post<LoginResponseModel>(`${this.baseAuthUrl}/login`, user)
      .pipe(map(AuthAdapter));
  }

  register(user: AuthDataModel): Observable<void> {
    return this.http.post<void>(`${this.baseAuthUrl}/register`, user);
  }
}
