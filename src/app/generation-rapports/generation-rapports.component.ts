import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-generation-rapports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generation-rapports.component.html',
  styleUrls: ['./generation-rapports.component.css'], 
})
export class GenerationRapportsComponent {
  title = 'html-to-pdf';
  public convertToPDF() {
    html2canvas(document.getElementById('ContentToPDF')!).then((canvas) => {
      // Check if the canvas has valid dimensions
      if (canvas.width > 0 && canvas.height > 0) {
        let pdf = new jsPDF('p', 'mm', 'a4'); // Use 'a4' for a standard A4 size page
        var width = pdf.internal.pageSize.getWidth() - 20;
        var height = (canvas.height * width) / canvas.width;
        pdf.addImage(canvas, 'PNG', 10, 0, width, height);
        // pdf.save('output.pdf');

        const pdfDataUri = pdf.output('datauristring');

        // Open the PDF in a new browser tab or window
        const newTab = window.open();
        if (newTab) {
          newTab.document.write(
            '<iframe width="100%" height="100%" src="' +
              pdfDataUri +
              '"></iframe>'
          );
        } else {
          console.error('Unable to open a new tab.');
        }
      } else {
        console.error(
          'html2canvas returned a canvas with zero width or height.'
        );
      }
    });
  }
}
