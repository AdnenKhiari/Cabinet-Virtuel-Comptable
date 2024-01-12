import { AfterViewInit, Component } from '@angular/core'
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts'

@Component({
  selector: 'app-charte-ecart-revenues-charges',
  templateUrl: './charte-ecart-revenues-charges.component.html',
  styleUrls: ['./charte-ecart-revenues-charges.component.css']
})
export class CharteEcartRevenuesChargesComponent implements AfterViewInit {
  chartOptions: any;
  ngAfterViewInit() {
    this.chartOptions = {
      animationEnabled: true,
      title: {
        text: 'Marge bénéficiaire'
      },
      axisY: {
        title: 'MDT'
      },
      data: [
        {
          type: 'area',
          name: 'Revenues',
          showInLegend: true,
          legendMarkerType: 'square',
          color: 'rgba(40,175,101,0.6)',
          markerSize: 0,
          dataPoints: [
            { x: new Date(2013, 0, 1, 0, 0), y: 7, label: 'midnight' },
            { x: new Date(2013, 0, 1, 1, 0), y: 8 },
            { x: new Date(2013, 0, 1, 2, 0), y: 5 },
            { x: new Date(2013, 0, 1, 3, 0), y: 7 },
            { x: new Date(2013, 0, 1, 4, 0), y: 6 },
            { x: new Date(2013, 0, 1, 5, 0), y: 8 },
            { x: new Date(2013, 0, 1, 6, 0), y: 12 },
            { x: new Date(2013, 0, 1, 7, 0), y: 24 },
            { x: new Date(2013, 0, 1, 8, 0), y: 36 },
            { x: new Date(2013, 0, 1, 9, 0), y: 35 },
            { x: new Date(2013, 0, 1, 10, 0), y: 37 },
            { x: new Date(2013, 0, 1, 11, 0), y: 29 },
            { x: new Date(2013, 0, 1, 12, 0), y: 34, label: 'noon' },
            { x: new Date(2013, 0, 1, 13, 0), y: 38 },
            { x: new Date(2013, 0, 1, 14, 0), y: 23 },
            { x: new Date(2013, 0, 1, 15, 0), y: 31 },
            { x: new Date(2013, 0, 1, 16, 0), y: 34 },
            { x: new Date(2013, 0, 1, 17, 0), y: 29 },
            { x: new Date(2013, 0, 1, 18, 0), y: 14 },
            { x: new Date(2013, 0, 1, 19, 0), y: 12 },
            { x: new Date(2013, 0, 1, 20, 0), y: 10 },
            { x: new Date(2013, 0, 1, 21, 0), y: 8 },
            { x: new Date(2013, 0, 1, 22, 0), y: 13 },
            { x: new Date(2013, 0, 1, 23, 0), y: 11 }
          ]
        },
        {
          type: 'area',
          name: 'Dépenses',
          showInLegend: true,
          legendMarkerType: 'square',
          color: 'rgba(0,75,141,0.7)',
          markerSize: 0,
          dataPoints: [
            { x: new Date(2013, 0, 1, 0, 0), y: 12, label: 'midnight' },
            { x: new Date(2013, 0, 1, 1, 0), y: 10 },
            { x: new Date(2013, 0, 1, 2, 0), y: 3 },
            { x: new Date(2013, 0, 1, 3, 0), y: 5 },
            { x: new Date(2013, 0, 1, 4, 0), y: 2 },
            { x: new Date(2013, 0, 1, 5, 0), y: 1 },
            { x: new Date(2013, 0, 1, 6, 0), y: 3 },
            { x: new Date(2013, 0, 1, 7, 0), y: 6 },
            { x: new Date(2013, 0, 1, 8, 0), y: 14 },
            { x: new Date(2013, 0, 1, 9, 0), y: 15 },
            { x: new Date(2013, 0, 1, 10, 0), y: 21 },
            { x: new Date(2013, 0, 1, 11, 0), y: 24 },
            { x: new Date(2013, 0, 1, 12, 0), y: 28, label: 'noon' },
            { x: new Date(2013, 0, 1, 13, 0), y: 26 },
            { x: new Date(2013, 0, 1, 14, 0), y: 17 },
            { x: new Date(2013, 0, 1, 15, 0), y: 23 },
            { x: new Date(2013, 0, 1, 16, 0), y: 28 },
            { x: new Date(2013, 0, 1, 17, 0), y: 22 },
            { x: new Date(2013, 0, 1, 18, 0), y: 10 },
            { x: new Date(2013, 0, 1, 19, 0), y: 9 },
            { x: new Date(2013, 0, 1, 20, 0), y: 6 },
            { x: new Date(2013, 0, 1, 21, 0), y: 4 },
            { x: new Date(2013, 0, 1, 22, 0), y: 12 },
            { x: new Date(2013, 0, 1, 23, 0), y: 14 }
          ]
        }
      ]
    }
  }
}