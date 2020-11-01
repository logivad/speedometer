import { NgModule } from '@angular/core';
import {SpeedometerModule} from './speedometer/speedometer.module';

export * from './speedometer/speedometer.module';

@NgModule({
  declarations: [],
  imports: [
    SpeedometerModule,
  ],
  exports: [
    SpeedometerModule
  ]
})
export class LibModule { }
