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
import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
  ],
  providers: [
    {
      provide: API_KEY,
      useValue: 'AIzaSyA_fXye0_JWXfRQLwBSIIcFc - WsZOnBz3g',
    },
    GoogleSheetsDbService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// AIzaSyA_fXye0_JWXfRQLwBSIIcFc-WsZOnBz3g

// url https://docs.google.com/spreadsheets/d/1amz6Lh3i0ArpMtswsT_oF7i3Jj-KTGfik5qMj2l2R3g/edit?usp=sharing
