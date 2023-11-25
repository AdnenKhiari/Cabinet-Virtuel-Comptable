import { Component } from '@angular/core'

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  username: string = ''
  password: string = ''
  isLoggedIn: boolean = false

  login() {
    // Vous pouvez implémenter ici la logique d'authentification,
    // par exemple, en vérifiant les informations d'identification auprès d'un service.
    // Pour cet exemple, simplement définir isLoggedIn à true.
    this.isLoggedIn = true
  }

  logout() {
    // Logique de déconnexion
    this.isLoggedIn = false
    this.username = ''
    this.password = ''
  }
}
