// pdf-conversion.service.ts
import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class PdfConversionService {
  convertToPDF(elementId: string, fileName: string) {
    const element = document.getElementById(elementId);

    if (!element) {
      console.error(`Element with ID '${elementId}' not found.`);
      return;
    }

    html2canvas(element).then((canvas) => {
      if (canvas.width > 0 && canvas.height > 0) {
        const pdf = new jsPDF('p', 'mm', 'a4');
        const width = pdf.internal.pageSize.getWidth() - 20;
        const height = (canvas.height * width) / canvas.width;
        pdf.addImage(canvas, 'PNG', 10, 0, width, height);

        const pdfDataUri = pdf.output('datauristring');
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
        saveAs(pdfDataUri, fileName);
      } else {
        console.error('html2canvas returned a canvas with zero width or height.');
      }
    });
  }
}
