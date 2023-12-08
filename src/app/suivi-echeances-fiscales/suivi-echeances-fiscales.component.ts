// suivi-echeances-fiscales.component.ts

import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-suivi-echeances-fiscales',
  templateUrl: './suivi-echeances-fiscales.component.html',
  styleUrls: ['./suivi-echeances-fiscales.component.scss']
})
export class SuiviEcheancesFiscalesComponent implements OnInit {
  echeances: any[] = []
  showWeeks: { [key: string]: boolean } = {}
  selectedMonth: string | null = null
  months: string[] = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ]
  weeks: number[] = [1, 2, 3, 4, 5]

  constructor() {}

  toggleWeeks(month: string): void {
    if (this.selectedMonth === month) {
      this.selectedMonth = null
    } else {
      this.selectedMonth = month
      this.months.forEach(m => {
        this.showWeeks[m] = m === month
      })
    }
  }

  ngOnInit(): void {
    const currentDate = new Date()
    const monthIndex = currentDate.getMonth()
    this.selectedMonth = this.months[monthIndex]
    this.showWeeks[this.selectedMonth] = true

    this.echeances = [
      {
        date: '2024-01-23',
        type: 'Déclaration de TVA',
        description: 'description1',
        status: 'Traité'
      },
      { date: '2023-11-30', type: 'Évènement', description: 'description2', status: 'Non Traité' },
      {
        date: '2023-12-31',
        type: 'Déclaration fiscale',
        description: 'description3',
        status: 'Traité'
      }
    ]
  }
}
