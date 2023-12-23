import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of } from 'rxjs'
import { AuthService } from '../../authentification/auth.service'
import * as AuthActions from './auth.actions'

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(action =>
        this.authService.login(action.email, action.password).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(error => of(AuthActions.loginFailure({ error: error.message })))
        )
      )
    )
  )

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signup),
      mergeMap(action =>
        this.authService
          .signup({
            ...action
          })
          .pipe(
            map(user => AuthActions.signupSuccess({ user: user })),
            catchError(error => of(AuthActions.signupFailure({ error: error.message })))
          )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}
