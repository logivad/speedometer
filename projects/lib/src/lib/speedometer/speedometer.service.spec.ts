import { TestBed } from '@angular/core/testing';

import { SpeedometerService } from './speedometer.service';

describe('SpeedometerService', () => {
    let service: SpeedometerService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SpeedometerService);
    });

    it('Service creation', () => {
        expect(service).toBeTruthy();
    });

    it('getSafeSpeedValue', () => {
        expect(service.getSafeSpeedValue(10)).toBe(10);
        expect(service.getSafeSpeedValue('10')).toBe(10);
        expect(service.getSafeSpeedValue(10.5)).toBe(10.5);
        expect(service.getSafeSpeedValue('10.5')).toBe(10.5);
        expect(service.getSafeSpeedValue(-5)).toBe(0);
        expect(service.getSafeSpeedValue(185)).toBe(180);
    });

    it('getDegreeBySpeed', () => {
        expect(service.getDegreeBySpeed(0)).toBe(-120);
        expect(service.getDegreeBySpeed(90)).toBe(0);
        expect(service.getDegreeBySpeed(180)).toBe(120);
    });

    it('getMeterBackgroundColor', () => {
        const [green, orange, red] = ['#008000cc', '#ffa500cc', '#f00c'];

        expect(service.getMeterBackgroundColor(0)).toBe(green);
        expect(service.getMeterBackgroundColor(60)).toBe(green);
        expect(service.getMeterBackgroundColor(60.9)).toBe(green);

        expect(service.getMeterBackgroundColor(61)).toBe(orange);
        expect(service.getMeterBackgroundColor(120.9)).toBe(orange);

        expect(service.getMeterBackgroundColor(121)).toBe(red);
        expect(service.getMeterBackgroundColor(180)).toBe(red);
    });
});
