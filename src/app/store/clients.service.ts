// clients/clients.service.ts
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';
import { Client } from '../store/clients/clientsState.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private clients: Client[] = [
    { id: 1, name: 'Client 1', email: 'client1@example.com', phoneNumber: '123-456-7890' },
    { id: 2, name: 'Client 2', email: 'client2@example.com', phoneNumber: '987-654-3210' }
    // Add more sample clients as needed
  ];

  getClients(): Observable<Client[]> {
    return of(this.clients).pipe(delay(1000)); // Simulate a delay of 1 second
  }

  // Other methods for CRUD operations can be added here

  // Example of adding a client
  addClient(client: Client): Observable<Client[]> {
    const newClient: Client = { ...client, id: this.generateUniqueId() };
    this.clients.push(newClient);
    return of(this.clients).pipe(delay(1000));
  }

  private generateUniqueId(): number {
    // Logic to generate a unique ID
    // Replace with your actual implementation
    return Math.max(...this.clients.map(client => client.id), 0) + 1;
  }

  // Example of deleting a client
  deleteClient(clientId: number): Observable<Client[]> {
    const index = this.clients.findIndex(c => c.id === clientId);
    if (index !== -1) {
      this.clients.splice(index, 1);
    } else {
      return throwError('Client not found');
    }
    return of(this.clients).pipe(delay(1000));
  }
}
