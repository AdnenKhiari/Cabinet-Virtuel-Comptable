import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AuthentificationModule } from './authentification/authentification.module'
import { LoginComponent } from './authentification/login/login.component'
import { SignUpComponent } from './authentification/sign-up/sign-up.component'
import { TableauDeBordComponent } from "./tableau-de-bord/tableau-de-bord.component";
import { CharteChargesComponent } from './charte-charges/charte-charges.component';
import { CharteEcartRevenuesChargesComponent } from './charte-ecart-revenues-charges/charte-ecart-revenues-charges.component';
import { RevenuesClientsComponent } from './revenues-clients/revenues-clients.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImpressionsDocumentsListComponent } from './impressions-documents-list/impressions-documents-list.component';


@NgModule({
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, CanvasJSAngularChartsModule, AppRoutingModule, AuthentificationModule, TableauDeBordComponent, CharteChargesComponent, MatTableModule, BrowserAnimationsModule, ImpressionsDocumentsListComponent]
})
export class AppModule {}
