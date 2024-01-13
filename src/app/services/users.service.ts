// user.service.ts

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000' // Replace me

  constructor(private http: HttpClient) {}

  // Create a new user
  createUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user)
  }

  // Update user details
  updateUser(userId: number, updatedUser: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${userId}`, updatedUser)
  }

  // Delete user
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${userId}`)
  }

  getUser(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userId}`)
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`)
  }
}
