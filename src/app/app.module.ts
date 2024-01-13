import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationRapportComponent } from './generation-rapport/generation-rapport.component';
import { PdfConversionService } from './generation-rapports/generation-rapports.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PdfConversionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
