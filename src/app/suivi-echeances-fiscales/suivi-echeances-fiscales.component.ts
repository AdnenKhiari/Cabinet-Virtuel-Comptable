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

  getEcheancesForMonth(month: string): any[] {
    return this.echeances.filter(echeance => {
      const echeanceMonth = echeance.date.getMonth() // Assuming date is a Date object
      const monthIndex = this.months.indexOf(month)

      return echeanceMonth === monthIndex
    })
  }

  getWeekNumber(date: number): number {
    return Math.floor(date / 7) + 1
  }

  ngOnInit(): void {
    const currentDate = new Date()
    const monthIndex = currentDate.getMonth()
    this.selectedMonth = this.months[monthIndex]
    this.showWeeks[this.selectedMonth] = true
    this.echeances = [
      {
        date: new Date('2024-01-23'),
        type: 'Déclaration de TVA',
        description: 'description1',
        status: 'Traité'
      },
      {
        date: new Date('2023-11-30'),
        type: 'Évènement',
        description: 'description2',
        status: 'Non Traité'
      },
      {
        date: new Date('2023-12-31'),
        type: 'Déclaration fiscale',
        description: 'description3',
        status: 'Traité'
      },
      {
        date: new Date('2023-08-15'),
        type: 'Fête nationale',
        description: 'description4',
        status: 'En cours'
      },
      {
        date: new Date('2024-04-10'),
        type: 'Rapport financier',
        description: 'description5',
        status: 'Non Traité'
      },
      {
        date: new Date('2023-12-20'),
        type: 'Réunion annuelle',
        description: 'description6',
        status: 'En cours'
      },
      {
        date: new Date('2023-06-12'),
        type: 'Audit externe',
        description: 'description7',
        status: 'Non Traité'
      },
      {
        date: new Date('2023-09-22'),
        type: 'Formation du personnel',
        description: 'description8',
        status: 'En cours'
      },
      {
        date: new Date('2024-02-14'),
        type: 'Planification stratégique',
        description: 'description9',
        status: 'Non Traité'
      },
      {
        date: new Date('2023-07-01'),
        type: 'Nouvel exercice fiscal',
        description: 'description10',
        status: 'En cours'
      },
      {
        date: new Date('2023-12-05'),
        type: 'Projet de développement',
        description: 'description11',
        status: 'En cours'
      },
      {
        date: new Date('2023-12-25'),
        type: 'Bilan trimestriel',
        description: 'description12',
        status: 'Non Traité'
      },
      {
        date: new Date('2023-05-15'),
        type: 'Évaluation des performances',
        description: 'description13',
        status: 'En cours'
      },
      {
        date: new Date('2023-12-28'),
        type: 'Présentation des résultats',
        description: 'description14',
        status: 'Non Traité'
      },
      // Additional entries with specified types
      {
        date: new Date('2023-04-01'),
        type: 'Déclaration de TVA',
        description: 'description15',
        status: 'Traité'
      },
      {
        date: new Date('2023-12-12'),
        type: 'Évènement',
        description: 'description16',
        status: 'Non Traité'
      },
      {
        date: new Date('2023-06-30'),
        type: 'Déclaration fiscale',
        description: 'description17',
        status: 'Traité'
      },
      {
        date: new Date('2023-07-15'),
        type: 'Rapport financier',
        description: 'description18',
        status: 'En cours'
      },
      {
        date: new Date('2023-08-20'),
        type: 'Planification stratégique',
        description: 'description19',
        status: 'Non Traité'
      },
      {
        date: new Date('2023-09-25'),
        type: 'Bilan trimestriel',
        description: 'description20',
        status: 'En cours'
      }
    ]
  }
}
