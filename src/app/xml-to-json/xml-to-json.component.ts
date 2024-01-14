import { CommonModule } from '@angular/common'
import { Component, ElementRef, ViewChild } from '@angular/core'
import * as xml2js from 'xml2js'

@Component({
  selector: 'app-xml-to-json',
  templateUrl: './xml-to-json.component.html',
  styleUrls: ['./xml-to-json.component.css']
})
export class XmlToJsonComponent {
  @ViewChild('xmlInput') xmlInput!: ElementRef
  conversionResult: any
  convertXmlToJson() {
    const xmlInputValue: string = this.xmlInput.nativeElement.value
    // console.log(xmlInputValue)
    xml2js
      .parseStringPromise(xmlInputValue /*, options */)
      .then(result => {
        console.dir(result)
        this.conversionResult = JSON.stringify(result, null, 2)
        console.log('Done')
      })
      .catch(function (err) {
        // Failed
      })
  }
}
