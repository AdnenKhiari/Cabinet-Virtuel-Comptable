import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FichierService {
  private apiUrl = " http://localhost:3000/fichiers";

  constructor(private http : HttpClient) { }
  public GetFichier(){
    let myData=this.http.get<any>(this.apiUrl);
    return myData;
  }

  addFichier(fichier: any) {
    return this.http.post(this.apiUrl, fichier);
  }

  updateFichier(fichierId: string, updatedFichier: any){
    const updateUrl = `${this.apiUrl}/${fichierId}`;
    return this.http.put(updateUrl, updatedFichier);
  }

  deleteFichier(fichierId: number) {
    const deleteurl = `${this.apiUrl}/${fichierId}`; 
    return this.http.delete(deleteurl);
  }

}
