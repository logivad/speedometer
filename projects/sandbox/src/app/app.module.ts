import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SpeedometerModule} from '../../../lib/src/lib/speedometer/speedometer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SpeedometerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
