import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-bilan',
  templateUrl: './bilan.component.html',
  styleUrls: ['./bilan.component.css']
})
export class BilanComponent {
  // Data for the Bilan
  bilandata: any

  ngOnInit(): void {
    // Fetch Bilan data from service or store
    //   this.bilandata = data;
  }
}
