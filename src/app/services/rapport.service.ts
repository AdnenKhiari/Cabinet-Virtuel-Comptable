// rapport.model.ts

export interface Rapport {
  id: number
  titre: string
  contenu: string
  dateCreation: Date
  // Autres props
}

// rapport.service.ts

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RapportService {
  private apiUrl = 'changme' //api endpoint

  constructor(private http: HttpClient) {}

  generateReport(criteria: any): Observable<Rapport> {
    return this.http.post<Rapport>(`${this.apiUrl}/rapports`, criteria)
  }

  getReportById(reportId: number): Observable<Rapport> {
    return this.http.get<Rapport>(`${this.apiUrl}/rapports/${reportId}`)
  }

  getAllReports(): Observable<Rapport[]> {
    return this.http.get<Rapport[]>(`${this.apiUrl}/rapports`)
  }

  deleteReport(reportId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/rapports/${reportId}`)
  }
}
