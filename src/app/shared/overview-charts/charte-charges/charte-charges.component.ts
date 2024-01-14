import { AfterViewInit, Component } from '@angular/core'

@Component({
  selector: 'app-charte-charges',
  templateUrl: './charte-charges.component.html',
  styleUrls: ['./charte-charges.component.css']
})
export class CharteChargesComponent implements AfterViewInit {
  chartOptions: any
  ngAfterViewInit() {
    this.chartOptions = {
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
}
