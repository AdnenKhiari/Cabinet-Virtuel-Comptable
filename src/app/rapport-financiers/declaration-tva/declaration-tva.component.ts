import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-declaration-tva',
  templateUrl: './declaration-tva.component.html',
  styleUrls: ['./declaration-tva.component.css']
})
export class DeclarationTvaComponent implements OnInit {

  // Data for TVA 
  declarationtvaData: any;

  constructor() {}

  ngOnInit(): void {
    // Fetch TVA data 
    // this.declarationtvaData = ...; 
  }

}
