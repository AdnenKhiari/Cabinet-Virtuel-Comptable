import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private apiUrl = 'http://localhost:3000//api/statistics'

  constructor(private http: HttpClient) {}

  getStatistics(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/files/statistics`)
  }

  generateReport(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/files/report`)
  }

  generateGraph(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/files/graph`)
  }

  // Nouvelle méthode pour la logique d'analyse des données et la génération de rapport
  analyzeAndGenerateCustomReport(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/files/analyzeAndGenerateCustomReport`)
  }
}
