import { Injectable } from '@angular/core';
import { AuthenticationService } from '../service/authentication-service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() {}
  private userRoles: string[] = [];
  setUserRoles(roles: string[]): void {
    this.userRoles = roles;
  }
  hasRole(requiredRole: string): boolean {
    return this.userRoles.includes(requiredRole);
  }
}
