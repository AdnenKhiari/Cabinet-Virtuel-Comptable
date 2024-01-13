import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}
  private loggedInUser: string | null = null

  // Méthode de connexion
  login(username: string, password: string): Observable<boolean> {
    if (username === 'utilisateur' && password === 'motdepasse') {
      this.loggedInUser = username
      return of(true) // Connexion réussie
    } else {
      return of(false) // Échec de connexion
    }
  }

  // Méthode de déconnexion
  logout(): void {
    this.loggedInUser = null
  }

  // Vérifie si un utilisateur est connecté
  isLoggedIn(): boolean {
    return this.loggedInUser !== null
  }

  // Obtient le nom de l'utilisateur connecté
  getLoggedInUser(): string | null {
    return this.loggedInUser
  }
}
