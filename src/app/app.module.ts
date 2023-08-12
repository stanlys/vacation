import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DxBoxModule,
  DxButtonModule,
  DxDateRangeBoxModule,
  DxFormModule,
} from 'devextreme-angular';
import { LoginFormModule } from './components/login-form/login-form.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DxButtonModule,
    AppRoutingModule,
    DxDateRangeBoxModule,
    LoginFormModule,
    DxBoxModule,
    DxFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// AIzaSyA_fXye0_JWXfRQLwBSIIcFc-WsZOnBz3g
