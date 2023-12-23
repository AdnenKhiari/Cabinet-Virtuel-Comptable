import { Component } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable, take } from 'rxjs'
import { AppStateInterface } from 'src/app/store/appState.interface'
import * as AuthActions from '../../store/auth/auth.actions'
import * as AuthSelectors from '../../store/auth/auth.selectors'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isAuthenticated$: Observable<boolean>
  userString$: Observable<string>

  constructor(private store: Store<AppStateInterface>) {
    this.userString$ = this.store.pipe(select(AuthSelectors.userAsStringSelector))
    this.isAuthenticated$ = this.store.pipe(select(AuthSelectors.isAuthenticatedSelector))
  }

  email = ''
  password = ''

  login() {
    this.isAuthenticated$.pipe(take(1)).subscribe(isAthed => {
      if (isAthed) alert("You're already logged in!")
      else this.store.dispatch(AuthActions.login({ email: this.email, password: this.password }))
    })
  }
}
