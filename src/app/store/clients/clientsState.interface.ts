// clients/clientsState.interface.ts
export interface Client {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

export interface ClientsState {
  clients: Client[];
  selectedClient: Client | null;
  errorMessage: string | null;
}
