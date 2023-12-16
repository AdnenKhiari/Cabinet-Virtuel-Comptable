import { Component } from '@angular/core'
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts'

@Component({
  selector: 'app-charte-charges',
  standalone: true,
  templateUrl: './charte-charges.component.html',
  styleUrls: ['./charte-charges.component.css'],
  imports: [CanvasJSAngularChartsModule]
})
export class CharteChargesComponent {
  chartOptions = {
    animationEnabled: true,
    title: {
      text: 'Réparition des charges'
    },
    data: [
      {
        type: 'doughnut',
        yValueFormatString: "#,###.##'%'",
        indexLabel: '{name}',
        dataPoints: [
          { y: 28, name: 'RH' },
          { y: 10, name: 'Legal' },
          { y: 20, name: 'Production' },
          { y: 15, name: 'License' },
          { y: 23, name: 'Divers' },
          { y: 17, name: 'Taxes' },
          { y: 12, name: 'Assurances' }
        ]
      }
    ]
  }
}
