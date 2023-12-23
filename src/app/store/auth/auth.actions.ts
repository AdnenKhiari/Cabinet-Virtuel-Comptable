import { createAction, props } from '@ngrx/store'

export const login = createAction('[Auth] Login', props<{ email: string; password: string }>())

export const logout = createAction('[Auth] Logout')

export const loginSuccess = createAction('[Auth] Login Success', props<{ user: any }>())

export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>())

export const signup = createAction(
  '[Auth] Signup',
  props<{
    firstName: string
    lastName: string
    phone: string
    email: string
    password: string
    confirmPassword: string
    civilite: string
    fonction: string
    secteur: string
    societe: string
  }>()
)

export const signupSuccess = createAction('[Auth] Signup Success', props<{ user: any }>())

export const signupFailure = createAction('[Auth] Signup Failure', props<{ error: string }>())
