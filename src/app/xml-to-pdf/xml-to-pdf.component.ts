import { Component, ElementRef, ViewChild } from '@angular/core'
import * as xml2js from 'xml2js'
import * as pdfMake from 'pdfmake/build/pdfmake'

@Component({
  selector: 'app-xml-to-pdf',
  templateUrl: './xml-to-pdf.component.html',
  styleUrls: ['./xml-to-pdf.component.css']
})
export class XmlToPdfComponent {
  @ViewChild('xmlInput') xmlInput!: ElementRef

  constructor() {}

  convertXmlToPdf() {
    const xmlString = this.xmlInput.nativeElement.value

    // Parse XML to JSON
    xml2js.parseString(xmlString, (err: any, result: any) => {
      if (err) {
        console.error('Error parsing XML:', err)
        return
      }

      // Transform JSON to PDF content
      const pdfContent = this.generatePdfContent(result)

      // Generate PDF
      pdfMake.createPdf(pdfContent).open()
    })
  }

  generatePdfContent(xmlJson: any): any {
    // Your logic to generate PDF content from XML JSON goes here
    // Example: Create a simple PDF document
    const documentDefinition = {
      content: [
        { text: 'XML to PDF Example', style: 'header' },
        { text: JSON.stringify(xmlJson, null, 2), style: 'body' }
      ],
      styles: {
        header: { fontSize: 18, bold: true },
        body: { fontSize: 12 }
      }
    }

    return documentDefinition
  }
}
