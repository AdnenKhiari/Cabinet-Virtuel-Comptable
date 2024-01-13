// search.service.ts

import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost:3000/' // Replace with api endpoint

  constructor(private http: HttpClient) {}

  // Search financial and tax files based on criteria
  searchFiles(criteria: any): Observable<any[]> {
    // Convert criteria to HttpParams
    let params = new HttpParams()
    for (const key in criteria) {
      if (criteria.hasOwnProperty(key)) {
        params = params.set(key, criteria[key])
      }
    }

    // Perform search
    return this.http.get<any[]>(`${this.apiUrl}/Fichiers/`, { params })
  }
}
