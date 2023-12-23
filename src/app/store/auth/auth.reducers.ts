import { createReducer, on } from '@ngrx/store'
import { AuthStateInterface } from './authState.interface'
import * as AuthActions from './auth.actions'

export const initialState: AuthStateInterface = {
  isAuthenticated: false,
  user: null,
  error: null
}

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    isAuthenticated: true,
    user: { ...action.user }
  })),
  on(AuthActions.loginFailure, (state, action) => ({
    ...state,
    isAuthenticated: true,
    error: action.error
  })),
  on(AuthActions.logout, state => ({
    ...state,
    isAuthenticated: false,
    user: null
  })),
  on(AuthActions.signupSuccess, (state, action) => ({
    ...state,
    isAuthenticated: true,
    user: { ...action.user }
  }))
)
