// clients/clients.actions.ts
import { createAction, props } from '@ngrx/store'
import { Client } from './clientsState.interface'

export const loadClients = createAction('[Clients] Load Clients')
export const clientsLoaded = createAction(
  '[Clients] Clients Loaded',
  props<{ clients: Client[] }>()
)
export const selectClient = createAction(
  '[Clients] Select Client',
  props<{ client: Client | null }>()
)
export const addOrUpdateClient = createAction(
  '[Clients] Add or Update Client',
  props<{ client: Client }>()
)
export const deleteClient = createAction('[Clients] Delete Client', props<{ client: Client }>())
export const clientsError = createAction(
  '[Clients] Clients Error',
  props<{ errorMessage: string }>()
)
