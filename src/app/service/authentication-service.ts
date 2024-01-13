import { Injectable } from '@angular/core'
import { User } from '../model/user-model'
import { UUID } from 'angular2-uuid'
import { Observable, of, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users: User[] = []
  authenticatedUser: User | undefined
  constructor() {
    this.users.push({
      _id: { $oid: UUID.UUID() },
      email: 'f.benayed@gnet.tn',
      password: '$2b$10$SmngA.WGX81mhNiE4qJYvOVeCH95JtZuCx58bP4OG/mt73p3fJFqK',
      confirmpassword: '$2b$10$xKRJOFlwiDk0G2xbCyhW9e1i0RqyAQ8kOzctSfYXi4vSwZbLVrp..',
      firstname: 'fayçal',
      lastname: 'benayed',
      fonction: null,
      secteur: null,
      civilite: 'Monsieur',
      usertype: 'Collaborateur',
      mobile: '21698350575',
      raisonsociale: null,
      nomsociete: null,
      clientcode: 'a254',
      role: 'admin',
      created: { $date: new Date().toISOString() }
    })
    this.users.push({
      _id: { $oid: UUID.UUID() },
      email: 'john.doe@example.com',
      password: '12345',
      confirmpassword: '$2b$10$SomeHashedPassword',
      firstname: 'John',
      lastname: 'Doe',
      fonction: 'Software Engineer',
      secteur: 'Information Technology',
      civilite: 'Mr.',
      usertype: 'Employee',
      mobile: '1234567890',
      raisonsociale: null,
      nomsociete: null,
      clientcode: 'c123',
      role: 'user',
      created: { $date: new Date().toISOString() }
    })
  }

  public login(email: string, password: string): Observable<User> {
    let appUser = this.users.find(u => u.email === email)

    if (!appUser) {
      return throwError(() => new Error('User not found!'))
    }

    if (appUser.password !== password) {
      return throwError(() => new Error('Bad credentials!'))
    }

    return of(appUser)
  }

  public authenticateUser(user: User): Observable<boolean> {
    this.authenticatedUser = user
    // Stringify all properties of the user and store in localStorage
    const userJsonString = JSON.stringify({
      _id: { $oid: user._id?.$oid },
      email: user.email,
      password: user.password,
      confirmpassword: user.confirmpassword,
      firstname: user.firstname,
      lastname: user.lastname,
      fonction: user.fonction,
      secteur: user.secteur,
      civilite: user.civilite,
      usertype: user.usertype,
      mobile: user.mobile,
      raisonsociale: user.raisonsociale,
      nomsociete: user.nomsociete,
      clientcode: user.clientcode,
      role: user.role,
      created: { $date: user.created?.$date }
    })

    localStorage.setItem('authUser', userJsonString)

    return of(true)
  }

  public hasRole(role: string): boolean {
    return this.authenticatedUser?.role === role
  }
  public getUserRole(): string | undefined {
    return this.authenticatedUser?.role
  }

  public isAuthenticated() {
    return this.authenticatedUser != undefined
  }
}
