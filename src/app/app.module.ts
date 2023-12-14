import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RapportFinanciersComponent } from './rapport-financiers/rapport-financiers.component';

@NgModule({
  declarations: [
    AppComponent,
    RapportFinanciersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
