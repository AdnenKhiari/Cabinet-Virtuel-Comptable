import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Audit } from '../models/historique-audit';
import { BACKEND_URL } from '../constants/url';
import { Observable,of } from 'rxjs';
import {auditFakeData} from '../constants/historique-audit'

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  constructor(private http: HttpClient) { }

  getAudit() :Observable<Audit[]>{
    // return this.http.get<Audit[]>(`${BACKEND_URL}/audit`)
    return of(auditFakeData)
  }

  getAuditById(id: number):Observable<Audit> {
    return this.http.get<Audit>(`${BACKEND_URL}/audit/${id}`)
  }

  addAudit(audit: Audit) :Observable<Audit>{
    return this.http.post<Audit>(`${BACKEND_URL}/audit`, audit)
  }

  updateAudit(audit: Audit): Observable<Audit> {
    return this.http.put<Audit>(`${BACKEND_URL}/audit/${audit.id}`, audit)
  }

  deleteAudit(id: number) {
    return this.http.delete(`${BACKEND_URL}/audit/${id}`)
  }
}
