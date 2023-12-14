import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from "../constants/url";
import { Historique } from '../models/historique-audit';
import { Observable,of } from 'rxjs';
import { historiqueFakeData } from '../constants/historique-audit';
@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  constructor(private http: HttpClient) { }

  getHistorique():Observable<Historique[]> {
    // return this.http.get<Historique[]>(`${BACKEND_URL}/historique`)
    return of(historiqueFakeData)
  }

  getHistoriqueById(id: number):Observable<Historique> {
    return this.http.get<Historique>(`${BACKEND_URL}/historique/${id}`)
  }

  addHistorique(historique: Historique) :Observable<Historique>{
    return this.http.post<Historique>(`${BACKEND_URL}/historique`, historique)
  }

  updateHistorique(historique: Historique) {
    return this.http.put<Historique>(`${BACKEND_URL}/historique/${historique.id}`, historique)
  }

  deleteHistorique(id: number) {
    return this.http.delete(`${BACKEND_URL}/historique/${id}`)
  }

}
