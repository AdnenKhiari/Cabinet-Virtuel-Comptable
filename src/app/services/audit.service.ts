import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class AuditService {
  constructor(private http: HttpClient) {}

  getReclamationHistory(reclamationId: number): Observable<any[]> {
    // Récupérer l'historique des actions pour une réclamation spécifique depuis l'API ou un service
    return this.http.get<any[]>(`/api/fichiers comptables et fiscales/${reclamationId}/history`)
  }
}
