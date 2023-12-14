import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-rapport-financiers',
  templateUrl: './rapport-financiers.component.html',
  styleUrls: ['./rapport-financiers.component.css']
})
export class RapportFinanciersComponent {

  constructor(private router: Router) {}

  onBilanClick() {
    this.router.navigate(['bilan']);
  }

  onCompteResultatClick() {
    this.router.navigate(['compte-resultat']); 
  }

  onDeclarationTvaClick() {
    this.router.navigate(['declaration-tva']); 
  }

}
