import { Component } from '@angular/core'
import { MatTableModule } from '@angular/material/table'

@Component({
  selector: 'app-revenues-clients',
  templateUrl: './revenues-clients.component.html',
  styleUrls: ['./revenues-clients.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class RevenuesClientsComponent {
  displayedColumns: string[] = ['position', 'nom', 'recette', 'statut']
  dataSource = [
    { position: 1, nom: 'A Consulting', recette: 10079, statut: 'Payé' },
    { position: 2, nom: 'Cabinet B', recette: 40026, statut: 'Payé' },
    { position: 3, nom: 'Sté XYZ', recette: 6941, statut: 'Impayé' },
    { position: 1, nom: 'A Consulting', recette: 10079, statut: 'Payé' },
    { position: 2, nom: 'Cabinet B', recette: 40026, statut: 'Payé' },
    { position: 3, nom: 'Sté XYZ', recette: 6941, statut: 'Impayé' }
  ]
}
