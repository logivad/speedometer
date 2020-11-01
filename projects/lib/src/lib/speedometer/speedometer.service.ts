import { Injectable } from '@angular/core';

export const minSpeed = 0;
export const minDegree = -120;
export const maxSpeed = 180;
export const maxDegree = 120;

export const meterPalette = [
    {
        color: '#008000cc',
        range: [0, 61],
    },
    {
        color: '#ffa500cc',
        range: [61, 121],
    },
    {
        color: '#f00c',
        range: [121, 181],
    },
];

@Injectable({
    providedIn: 'root',
})
export class SpeedometerService {
    public getDegreeBySpeed(speed = minSpeed): number {
        return (
            (speed * (maxDegree - minDegree) -
                minSpeed * maxDegree +
                maxSpeed * minDegree) /
            (maxSpeed - minSpeed)
        );
    }

    public getMeterBackgroundColor(speed = minSpeed): string {
        let color = meterPalette[0].color;

        meterPalette.forEach(paletteItem => {
            const [minRange, maxRange] = paletteItem.range;

            if (speed >= minRange && speed < maxRange) {
                color = paletteItem.color;
            }
        });

        return color;
    }

    public getSafeSpeedValue(speed) {
        speed = parseFloat(speed);

        if (!isFinite(speed)) {
            speed = 0;
        }

        if (speed <= minSpeed) {
            speed = minSpeed;
        }

        if (speed >= maxSpeed) {
            speed = maxSpeed;
        }

        return speed;
    }
}
