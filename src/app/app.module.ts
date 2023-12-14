import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { AuthentificationModule } from './authentification/authentification.module'
import { LoginComponent } from './authentification/login/login.component'
import { SignUpComponent } from './authentification/sign-up/sign-up.component'
import { ListeClientsComponent } from './liste-clients/liste-clients.component'

@NgModule({
  declarations: [AppComponent, ListeClientsComponent],
  imports: [BrowserModule, AppRoutingModule, AuthentificationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
