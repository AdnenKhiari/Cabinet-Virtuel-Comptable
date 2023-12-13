import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NotificationModule } from './notification/notification.module'
import { NavbarModule } from './navbar/navbar.module'
import { SaisieComptableModule } from './saisie-comptable/saisie-comptable.module'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotificationModule,
    NavbarModule,
    SaisieComptableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
