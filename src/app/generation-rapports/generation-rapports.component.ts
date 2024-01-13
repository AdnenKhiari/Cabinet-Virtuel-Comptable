import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';


import { PdfConversionService } from './generation-rapports.service';

@Component({
  selector: 'app-generation-rapports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generation-rapports.component.html',
  styleUrls: ['./generation-rapports.component.css'], 
})
export class GenerationRapportsComponent {
  title = 'html-to-pdf';

  constructor(private pdfConversionService: PdfConversionService) {}

  public convertToPDF() {
    this.pdfConversionService.convertToPDF('ContentToPDF', 'generated.pdf');
  }
}