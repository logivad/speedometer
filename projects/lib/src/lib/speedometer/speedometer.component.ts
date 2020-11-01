import {Component, OnInit, ChangeDetectionStrategy, Input, HostBinding} from '@angular/core';
import {SpeedometerService} from './speedometer.service';



@Component({
    selector: 'lib-speedometer',
    templateUrl: './speedometer.component.html',
    styleUrls: ['./speedometer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeedometerComponent implements OnInit {
    @Input() public set speed(value) {
        value = this.speedometerService.getSafeSpeedValue(value);
        this.dialTransform = this.getDialTransform(value);
        this.meterBackgroundColor = this.speedometerService.getMeterBackgroundColor(value);
    }
    @HostBinding('style.backgroundColor') get bg() { return this.meterBackgroundColor; }

    public dialTransform: string;
    public meterBackgroundColor: string;

    constructor(public speedometerService: SpeedometerService) {}

    ngOnInit(): void {}

    public getDialTransform(speed: number) {
        return `rotate(${this.speedometerService.getDegreeBySpeed(speed)}deg)`;
    }
}
