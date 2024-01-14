// priorite.service.ts

export interface Priorite {
  id: number
  nom: string
  description: string
  // Autres propriétés
}

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PrioriteService {
  private apiUrl = 'your_api_endpoint' // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getPriorities(): Observable<Priorite[]> {
    return this.http.get<Priorite[]>(`${this.apiUrl}/priorities`)
  }

  getPriorityById(priorityId: number): Observable<Priorite> {
    return this.http.get<Priorite>(`${this.apiUrl}/priorities/${priorityId}`)
  }

  addPriority(priority: Priorite): Observable<Priorite> {
    return this.http.post<Priorite>(`${this.apiUrl}/priorities`, priority)
  }

  updatePriority(priorityId: number, updatedPriority: Priorite): Observable<Priorite> {
    return this.http.put<Priorite>(`${this.apiUrl}/priorities/${priorityId}`, updatedPriority)
  }

  deletePriority(priorityId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/priorities/${priorityId}`)
  }
}
