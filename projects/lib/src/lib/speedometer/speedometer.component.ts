import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-speedometer',
  templateUrl: './speedometer.component.html',
  styleUrls: ['./speedometer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeedometerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
