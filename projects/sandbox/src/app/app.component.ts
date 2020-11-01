import { Component, OnInit } from '@angular/core';
import { minSpeed, maxSpeed } from '../../../lib/src/lib/speedometer/speedometer.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public speed = 0;
    public speedAutoChange = true;

    public ngOnInit() {
        setInterval(() => {
            if (!this.speedAutoChange) {
                return;
            }

            this.speed = this.getRandomIntInclusive(minSpeed, maxSpeed);
        }, 4000);
    }

    private getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
