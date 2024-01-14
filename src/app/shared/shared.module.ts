import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CharteChargesComponent } from './overview-charts/charte-charges/charte-charges.component'
import { CharteEcartRevenuesChargesComponent } from './overview-charts/charte-ecart-revenues-charges/charte-ecart-revenues-charges.component'
import { RevenuesClientsComponent } from './overview-charts/revenues-clients/revenues-clients.component'
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts'
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [
    CharteChargesComponent,
    CharteEcartRevenuesChargesComponent,
    RevenuesClientsComponent
  ],
  imports: [CommonModule, CanvasJSAngularChartsModule, MatTableModule],
  exports: [CharteChargesComponent, CharteEcartRevenuesChargesComponent, RevenuesClientsComponent]
})
export class SharedModule {}
