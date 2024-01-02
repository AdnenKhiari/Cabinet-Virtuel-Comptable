import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapportsService {

  private apiUrl = " http://localhost:3000/rapports";

  constructor(private http: HttpClient) {}

  genererRapport(criteria: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, criteria);
  }
}
