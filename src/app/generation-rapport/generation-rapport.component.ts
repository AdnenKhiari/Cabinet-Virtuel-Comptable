import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { generate } from 'rxjs';


@Component({
  selector: 'app-generation-rapport',
  templateUrl: './generation-rapport.component.html',
  styleUrls: ['./generation-rapport.component.css']
})





export class GenerationRapportComponent {
  generatePDF(){
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
    //Données statiques qui définissent les informations du rapport comptable
    const jsonData = {
      "rapport": {
        "client": "Client Foulen Ben Foulen ",
        "periode": "Decembre 2023",
        "revenus": [
          {
            "categorie": "Ventes",
            "montant": 50000
          },
          {
            "categorie": "Honoraires",
            "montant": 10000
          }
        ],
        "depenses": [
          {
            "categorie": "Fournitures de bureau",
            "montant": 2000
          },
          {
            "categorie": "Frais de déplacement",
            "montant": 1500
          }
        ],
        "beneficeNet": 56500
      }
  };
  const documentDefinition : TDocumentDefinitions= {
    
    content: [
      { text: `Rapport pour ${jsonData.rapport.client}`, style: 'title' },
      { text: `Période: ${jsonData.rapport.periode}`, style: 'subtitle' },
      { text: 'Revenus', style: 'header' },
      {
        table: {
          headerRows: 1,
          body: [
            ['Catégorie', 'Montant'],
            ...jsonData.rapport.revenus.map(item => [item.categorie, item.montant])
          ]
        }
      },
      { text: 'Dépenses', style: 'header' },
      {
        table: {
          headerRows: 1,
          body: [
            ['Catégorie', 'Montant'],
            ...jsonData.rapport.depenses.map(item => [item.categorie, item.montant])
          ]
        }
      },
      { text: `Bénéfice Net: ${jsonData.rapport.beneficeNet}`, style: 'summary' }
    ],
    styles: {
      title: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
      subtitle: { fontSize: 14, margin: [0, 0, 0, 10] },
      header: { bold: true, margin: [0, 10, 0, 5] },
      summary: { margin: [0, 0, 0, 10] }
    }
  };
  //une fonction prédifinie pour convertir le fichier en pdf et le télécharger
  pdfMake.createPdf(documentDefinition).download('rapport.pdf');

}}
