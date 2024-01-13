import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {
  private apiUrl = " http://localhost:3000/historique";
  

  constructor(private http: HttpClient) { }

  getReclamationHistory(reclamationId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${reclamationId}/history`);
  }
 


}
