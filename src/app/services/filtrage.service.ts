import { Injectable } from '@angular/core'
import { Filtre } from '../filtre/Filtre'

@Injectable({
  providedIn: 'root'
})
export class ServiceFiltrage {
  appliquerFiltres(data: any[], filtres: Filtre[]): any[] {
    if (!filtres || filtres.length === 0) {
      return data
    }

    return data.filter(item => this.satisfaitFiltres(item, filtres))
  }

  satisfaitFiltres(item: any, filtres: Filtre[]): boolean {
    for (const filtre of filtres) {
      if (!this.satisfaitFiltre(item, filtre)) {
        return false
      }
    }
    return true
  }

  satisfaitFiltre(item: any, filtre: Filtre): boolean {
    switch (filtre.type) {
      case 'date':
        return this.satisfaitFiltreDate(item, filtre.valeur)
      case 'montant':
        return this.satisfaitFiltreMontant(item, filtre.valeur)

      default:
        return true
    }
  }

  satisfaitFiltreDate(item: any, valeur: any): boolean {
    return true
  }

  satisfaitFiltreMontant(item: any, valeur: any): boolean {
    return true
  }
}
