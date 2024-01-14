import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = " http://localhost:3000/fichiers";
  constructor(private http : HttpClient) { }
  public GetFichierByCode(code : any){
    let myData=this.http.get<any>(this.apiUrl + '/' + code);
    return myData;
  }
}
