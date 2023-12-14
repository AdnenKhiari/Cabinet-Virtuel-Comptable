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

  public GetUser(){
    let myData=this.http.get<any>(this.apiUrl);
    return myData;
  }

  public GetUserByCode(code : any){
    let myData=this.http.get<any>(this.apiUrl + '/' + code);
    return myData;
  }

  addUser(user: any) {
    return this.http.post(this.apiUrl, user);
  }

  updateUser(userId: string, updatedUser: any){
    const updateUrl = `${this.apiUrl}/${userId}`;
    return this.http.put(updateUrl, updatedUser);
  }
 
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
