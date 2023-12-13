import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationRapportComponent } from './generation-rapport/generation-rapport.component';
// Import pdfmake and vfs_fonts

@NgModule({
  declarations: [
    AppComponent,
    GenerationRapportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
