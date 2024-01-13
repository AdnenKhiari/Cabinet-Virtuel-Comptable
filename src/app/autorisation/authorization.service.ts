import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }
  private userRoles: string[] = [];
  setUserRoles(roles: string[]): void {
    this.userRoles = roles;
  }
  hasRole(requiredRole: string): boolean {
    return this.userRoles.includes(requiredRole);
  }
}
