import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpeedometerModule } from '../../../lib/src/lib/speedometer/speedometer.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, SpeedometerModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
