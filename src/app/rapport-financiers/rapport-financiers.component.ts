import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-rapport-financiers',
  templateUrl: './rapport-financiers.component.html',
  styleUrls: ['./rapport-financiers.component.css']
})
export class RapportFinanciersComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}


  onBilanClick() {
    this.router.navigate(['./bilan']);
  }

  onCompteResultatClick() {
    this.router.navigate(['./compte-resultat']); 
  }

  onDeclarationTvaClick() {
    this.router.navigate(['./declaration-tva']); 
  }

}
