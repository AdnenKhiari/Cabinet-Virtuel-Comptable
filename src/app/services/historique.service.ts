// historique.service.ts

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { HistoriqueReclamation } from './interfaces/HistoriqueReclamation'

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {
  private apiUrl = 'http://localhost:3000' // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  // Get history for a specific file
  getHistoryForFile(fileId: number): Observable<HistoriqueReclamation[]> {
    return this.http.get<HistoriqueReclamation[]>(`${this.apiUrl}/files/${fileId}/history`)
  }

  // Log a new action in the history
  logAction(
    fileId: number,
    action: string,
    utilisateur: string
  ): Observable<HistoriqueReclamation> {
    const historicalRecord: HistoriqueReclamation = {
      utilisateur: utilisateur,
      date: new Date(),
      action: action
      // Other properties
    }

    return this.http.post<HistoriqueReclamation>(
      `${this.apiUrl}/files/${fileId}/history`,
      historicalRecord
    )
  }
}
