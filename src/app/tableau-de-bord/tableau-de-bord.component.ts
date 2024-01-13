
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts'
import { Component } from '@angular/core'
import { CharteChargesComponent } from '../charte-charges/charte-charges.component'
import { CharteEcartRevenuesChargesComponent } from '../charte-ecart-revenues-charges/charte-ecart-revenues-charges.component'
import { RevenuesClientsComponent } from '../revenues-clients/revenues-clients.component'
import { AuthorizationService } from '../autorisation/authorization.service'
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-tableau-de-bord',
  standalone: true,
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.css'],
  imports: [CharteChargesComponent, CharteEcartRevenuesChargesComponent, RevenuesClientsComponent,CommonModule]
})
export class TableauDeBordComponent {

  constructor(public authService :AuthorizationService) {}
  chiffreAffaire = 100000
  Benefice = 10000
}
