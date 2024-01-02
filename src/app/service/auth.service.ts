import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = " http://localhost:3000/users";
  private sessionKey = 'access_token'; 
  constructor(private http : HttpClient) {}


 
    isAuthenticated(): boolean {
      const isAuthenticated = sessionStorage.getItem(this.sessionKey);
      return !!isAuthenticated;
    }
  
   
    setAuthenticationStatus(isAuthenticated: boolean): void {
      if (isAuthenticated) {
        sessionStorage.setItem(this.sessionKey, 'true');
      } else {
        sessionStorage.removeItem(this.sessionKey);
      }
    }

  

}
