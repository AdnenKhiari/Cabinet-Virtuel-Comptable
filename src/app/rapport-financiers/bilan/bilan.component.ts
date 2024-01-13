import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-bilan',
  templateUrl: './bilan.component.html',
  styleUrls: ['./bilan.component.css']
})
export class BilanComponent implements OnInit {
  // Data for the Bilan
  bilandata: any

  constructor() {}

  ngOnInit(): void {
    // Fetch Bilan data from service or store
    //   this.bilandata = data;
  }
}
