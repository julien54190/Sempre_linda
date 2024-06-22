import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { ICredentials } from '../_interfaces/credential';
import { IUser } from '../_interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:5001/auth/login';
  private userUrlBase = 'http://localhost:5001/users/';
  private isAuthenticatedUser: boolean = false;

  constructor(private http: HttpClient) { }

  login(credentials: ICredentials): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials).pipe(
      tap((response: any) => {
        this.storeToken(response.access_token);
        this.storeUserId(response.id);
        this.isAuthenticatedUser = true;
      }),
      switchMap(() => this.getUserDetails())
    );
  }

  private storeToken(token: string) {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      console.error('No token provided');
    }
  }

  private storeUserId(id: string) {
    if (id) {
      localStorage.setItem('userId', id); // Store user ID
    } else {
      console.error('No user ID provided');
    }
  }

  private getToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  private getUserId(): string | null {
    const userId = localStorage.getItem('userId');
    return userId;
  }

  public getUserDetails(): Observable<any> {
    const token = this.getToken();
    const userId = this.getUserId();
    if (!token || !userId) {
      return of(null);
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const userUrl = `${this.userUrlBase}${userId}`;
    return this.http.get<any>(userUrl, { headers }).pipe(
      tap((response: any) => {
      })
    );
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedUser;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.isAuthenticatedUser = false;
  }

  isAdmin(): Observable<boolean> {
    const token = this.getToken();
    const userId = this.getUserId();
    if (!token || !userId) {
      return of(false);
    }

    const userUrl = `${this.userUrlBase}${userId}`; // Construct the URL with the user ID
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(userUrl, { headers }).pipe(
      map(response => {
        return response.data.isAdmin;
      })
    );
  }

}
