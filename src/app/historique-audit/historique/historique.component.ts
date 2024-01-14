import { Component } from '@angular/core'
import { AuditService } from '../audit.service'
import { HistoriqueService } from '../historique.service'
import { Historique } from 'src/app/models/historique-audit.model'

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent {
  constructor(private historique: HistoriqueService) {}
  histories: Historique[] = []
  ngOnInit() {
    this.historique.getHistorique().subscribe(data => {
      this.histories = data
    })
  }
  showSuccessAlert: boolean = false
  showSuccessAlert1: boolean = false

  toggleSuccessAlert() {
    this.showSuccessAlert1 = !this.showSuccessAlert1
  }

  deleteHistorique(id: number) {
    this.showSuccessAlert = !this.showSuccessAlert
    this.historique.deleteHistorique(id).subscribe(() => {
      this.histories = this.histories.filter(historique => historique.id !== id)
    })
  }

  addHistorique(historique: Historique) {
    this.historique.addHistorique(historique).subscribe(data => {
      this.histories.push(data)
    })
  }

  updateHistorique(historique: Historique) {
    this.showSuccessAlert = !this.showSuccessAlert
    this.historique.updateHistorique(historique).subscribe(data => {
      this.histories = this.histories.map(historique => {
        if (historique.id === data.id) {
          return data
        }
        return historique
      })
    })
  }

  getHistoriqueById(id: number) {
    this.historique.getHistoriqueById(id).subscribe(data => {
      this.histories = this.histories.filter(historique => historique.id === id)
    })
  }
}
