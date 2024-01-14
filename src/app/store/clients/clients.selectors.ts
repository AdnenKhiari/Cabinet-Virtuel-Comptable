// clients/clients.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ClientsState } from './clientsState.interface'

export const selectClientsState = createFeatureSelector<ClientsState>('clientsState')

export const selectClients = createSelector(selectClientsState, state => state.clients)

export const selectSelectedClient = createSelector(
  selectClientsState,
  state => state.selectedClient
)

export const selectErrorMessage = createSelector(selectClientsState, state => state.errorMessage)
