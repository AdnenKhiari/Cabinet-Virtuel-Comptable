import { createSelector } from '@ngrx/store'
import { AppStateInterface } from '../appState.interface'

export const selectAuthState = (appState: AppStateInterface) => appState.authState

export const isAuthenticatedSelector = createSelector(
  selectAuthState,
  authState => authState.isAuthenticated
)

export const userSelector = createSelector(selectAuthState, authState => authState.user)

export const userAsStringSelector = createSelector(selectAuthState, authState =>
  JSON.stringify(authState.user)
)

export const errorSelector = createSelector(selectAuthState, authState => authState.error)
