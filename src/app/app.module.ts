// import { NgModule } from '@angular/core'
// import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
// import { AppComponent } from './app.component'

import { AuthentificationModule } from './authentification/authentification.module'
import { LoginComponent } from './authentification/login/login.component'
import { SignUpComponent } from './authentification/sign-up/sign-up.component'
// import { NotificationComponent } from './notification/notification.component';

// @NgModule({
//   declarations: [AppComponent, NotificationComponent],
//   imports: [BrowserModule, AppRoutingModule, AuthentificationModule],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
// import { MatToolbarModule, MatIconModule, MatTooltipModule, MatButtonModule } from "@angular/material";

// import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { NotificationListComponent } from './notification/notification.component'
import { NotificationService } from './services/notification.service'

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, CommonModule], // MatToolbarModule,FlexLayoutModule,
  //MatIconModule, MatTooltipModule, MatButtonModule],
  declarations: [AppComponent, NotificationListComponent],
  bootstrap: [AppComponent],
  providers: [NotificationService]
})
export class AppModule {}
