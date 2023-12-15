/* eslint-disable @typescript-eslint/no-empty-function */

import { Component } from '@angular/core'
import { CharteChargesComponent } from '../charte-charges/charte-charges.component'
import { CharteEcartRevenuesChargesComponent } from '../charte-ecart-revenues-charges/charte-ecart-revenues-charges.component'
import { RevenuesClientsComponent } from '../revenues-clients/revenues-clients.component'

@Component({
  selector: 'app-tableau-de-bord',
  standalone: true,
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.css'],
  imports: [CharteChargesComponent, CharteEcartRevenuesChargesComponent, RevenuesClientsComponent]
})
export class TableauDeBordComponent {
  constructor() {}
  chiffreAffaire = 100000
  Benefice = 10000
}
