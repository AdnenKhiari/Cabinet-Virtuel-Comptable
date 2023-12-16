import { Component } from '@angular/core'
import { MatTableModule } from '@angular/material/table'

@Component({
  selector: 'app-impressions-documents-list',
  templateUrl: './impressions-documents-list.component.html',
  styleUrls: ['./impressions-documents-list.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class ImpressionsDocumentsListComponent {
  displayedColumns: string[] = ['position', 'nom', 'type', 'lien']
  dataSource = [
    {
      position: 1,
      nom: 'REF 001',
      type: 'Facture',
      lien: 'https://www.africau.edu/images/default/sample.pdf'
    },
    {
      position: 2,
      nom: 'BILAN 2022',
      type: 'Bilan',
      lien: 'https://www.africau.edu/images/default/sample.pdf'
    },
    {
      position: 3,
      nom: 'BILAN 2023/07',
      type: 'Bilan',
      lien: 'https://www.africau.edu/images/default/sample.pdf'
    },
    {
      position: 1,
      nom: 'F00232',
      type: 'Facture',
      lien: 'https://www.africau.edu/images/default/sample.pdf'
    },
    {
      position: 2,
      nom: 'QUIT-01102',
      type: 'Quittance',
      lien: 'https://www.africau.edu/images/default/sample.pdf'
    }
  ]
}
