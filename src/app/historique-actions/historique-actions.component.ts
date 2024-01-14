import { Component, OnInit } from '@angular/core'

interface Action {
  description: string
  date: string
  userName: string
  userImageURL: string
}

@Component({
  selector: 'app-historique-actions',
  templateUrl: './historique-actions.component.html',
  styleUrls: ['./historique-actions.component.scss']
})
export class HistoriqueActionsComponent implements OnInit {
  actionHistory: Action[] = []

  ngOnInit(): void {
    this.actionHistory = [
      {
        description: 'Création du dossier client',
        date: '2023-07-15',
        userName: 'Admin1',
        userImageURL: '../../assets/AdminImage.jpg'
      },
      {
        description: 'Modification des informations client',
        date: '2023-09-10',
        userName: 'SuperViseur1',
        userImageURL: '../../assets/AdminImage.jpg'
      },
      {
        description: 'Envoi de la déclaration fiscale',
        date: '2023-08-02',
        userName: 'Client1',
        userImageURL: '../../assets/ClientImage.jpg'
      },
      {
        description: 'Envoi de la déclaration fiscale',
        date: '2023-09-10',
        userName: 'Client2',
        userImageURL: '../../assets/AdminImage.jpg'
      },
      {
        description: 'Modification des informations client',
        date: '2023-09-10',
        userName: 'SuperViseur2',
        userImageURL: '../../assets/ClientImage.jpg'
      },
      {
        description: 'Création du dossier client',
        date: '2023-09-10',
        userName: 'Admin2',
        userImageURL: '../../assets/AdminImage.jpg'
      }
    ]
  }
}
