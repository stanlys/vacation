import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxButtonModule, DxDateRangeBoxModule } from 'devextreme-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DxButtonModule, AppRoutingModule, DxDateRangeBoxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
