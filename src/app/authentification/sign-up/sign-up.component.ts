import { Component } from '@angular/core'
import { Store, select } from '@ngrx/store'
import * as AuthActions from '../../store/auth/auth.actions'
import * as AuthSelectors from '../../store/auth/auth.selectors'
import { Observable, take } from 'rxjs'
import { AppStateInterface } from 'src/app/store/appState.interface'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  firstName = ''
  lastName = ''
  phone = ''
  email = ''
  password = ''
  confirmPassword = ''
  civilite = ''
  fonction = ''
  secteur = ''
  societe = ''

  isAuthenticated$: Observable<boolean>
  userString$: Observable<string>

  constructor(private store: Store<AppStateInterface>) {
    this.userString$ = this.store.pipe(select(AuthSelectors.userAsStringSelector))
    this.isAuthenticated$ = this.store.pipe(select(AuthSelectors.isAuthenticatedSelector))
  }

  signup() {
    this.isAuthenticated$.pipe(take(1)).subscribe(isAthed => {
      if (isAthed) alert("You're already logged in!")
      else
        this.store.dispatch(
          AuthActions.signup({
            firstName: this.firstName,
            lastName: this.lastName,
            phone: this.phone,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword,
            civilite: this.civilite,
            fonction: this.fonction,
            secteur: this.secteur,
            societe: this.societe
          })
        )
    })
  }
}
