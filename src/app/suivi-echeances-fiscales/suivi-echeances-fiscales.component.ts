import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-suivi-echeances-fiscales',
  templateUrl: './suivi-echeances-fiscales.component.html',
  styleUrls: ['./suivi-echeances-fiscales.component.css']
})
export class SuiviEcheancesFiscalesComponent implements OnInit {
  echeances!: any[]

  constructor() {}

  ngOnInit(): void {
    // Initialisez les données ici (ex. appel à un service)
    this.echeances = [
      { date: '2023-12-31', type: 'Déclaration de TVA' },
      { date: '2023-12-31', type: 'Déclaration Mensuelle' },
      { date: '2023-12-31', type: 'Déclaration fiscale' }
    ]
  }
}
