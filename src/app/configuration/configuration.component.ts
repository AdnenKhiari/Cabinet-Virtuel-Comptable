import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  tauxTVA: number = 0.2
  reglesFiscales: string[] = ['Règle 1', 'Règle 2']
  categoriesDepenses: string[] = ['Catégorie 1', 'Catégorie 2']

  deviseParDefaut: string = 'EUR'
  periodeFiscale: string = 'Annuelle'
  modeRemuneration: string = 'Salaire'
  tauxImpotSociete: number = 0.25
  comptesBancaires: string[] = ['Compte principal', 'Compte épargne']
  langue: string = 'fr'

  constructor() {}

  ngOnInit(): void {}
}
