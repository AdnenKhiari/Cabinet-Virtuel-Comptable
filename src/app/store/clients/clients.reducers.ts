// clients/clients.reducers.ts
import { createReducer, on } from '@ngrx/store';
import * as clientsActions from './clients.actions';
import { ClientsState } from './clientsState.interface';

export const initialState: ClientsState = {
  clients: [],
  selectedClient: null,
  errorMessage: null,
};

export const clientsReducer = createReducer(
  initialState,
  on(clientsActions.clientsLoaded, (state, { clients }) => ({ ...state, clients })),
  on(clientsActions.selectClient, (state, { client }) => ({ ...state, selectedClient: client })),
  on(clientsActions.addOrUpdateClient, (state, { client }) => ({
    ...state,
    clients: state.clients.some((c) => c.id === client.id)
      ? state.clients.map((c) => (c.id === client.id ? { ...client } : c))
      : [...state.clients, { ...client }],
  })),
  on(clientsActions.deleteClient, (state, { client }) => ({
    ...state,
    clients: state.clients.filter((c) => c.id !== client.id),
  })),
  on(clientsActions.clientsError, (state, { errorMessage }) => ({ ...state, errorMessage })),
);
