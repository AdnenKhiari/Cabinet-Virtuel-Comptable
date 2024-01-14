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
    animationEnabled: true,  //enable animation for the chart
    title: {
      text: 'Réparition des charges' //title of the chart
    },
    data: [
      {
        type: 'doughnut',
        yValueFormatString: "#,###.##'%'",
        indexLabel: '{name}',
        // info for the charges chart

        dataPoints: [// data points for the charges chart
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
