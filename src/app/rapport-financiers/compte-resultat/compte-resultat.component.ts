import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compte-resultat',
  templateUrl: './compte-resultat.component.html',
  styleUrls: ['./compte-resultat.component.css']
})
export class CompteResultatComponent implements OnInit {

  // Data for the Compte de Résultat 
  comptederesultatdata: any;

  constructor() {}

  ngOnInit(): void {
    // Fetch Compte de Résultat data from service or store
    // this.comptederésultatdata = ...;
  }

}
