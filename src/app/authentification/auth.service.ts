import { Injectable } from '@angular/core'
import { Observable, delay, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // constructor() { }

  login(username: string, password: string) {
    return of({
      username: username,
      password: password
    }).pipe(delay(1000))
  }

  signup(user: any): Observable<any> {
    const retUser = {
      username: user?.email,
      password: user?.password
    }
    return of(retUser).pipe(delay(2000))
  }
}
