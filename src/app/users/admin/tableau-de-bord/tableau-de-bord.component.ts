
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts'
import { Component } from '@angular/core'
import { SharedModule}  from 'src/app/shared/shared.module'; // 





@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.css'],
})

export class TableauDeBordComponent {
  constructor() {}
  chiffreAffaire = 100000
  Benefice = 10000
}
