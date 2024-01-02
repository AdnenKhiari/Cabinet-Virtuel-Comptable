import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionFichiersService {
  private fichiers: any[] = [];

  constructor() { }
  // Envoi d'un fichier
  envoyerFichier(file: File): Observable<any> {

    const fichierInfo = {
      nom: file.name,
      taille: file.size,
      type: file.type,
    };

    this.fichiers.push(fichierInfo);
    return of(fichierInfo); 
  }

  getListeFichiers(): Observable<any[]> {
    return of(this.fichiers);
  }

  telechargerFichier(fileId: string): Observable<Blob> {
    const fichier = this.fichiers.find((f) => f.nom === fileId);
  
    if (fichier) {
      const blob = new Blob([], { type: fichier.type });
      return of(blob);
    } else {
      return this.handleError('Fichier non trouvé') as Observable<Blob>;
    }
  }
  
  private handleError(errorMessage: string): Observable<unknown> {
    console.error(errorMessage);
    return of(errorMessage);
  }
}
