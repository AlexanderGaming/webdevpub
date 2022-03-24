
export class Clock {

    constructor(hour = 0, minute = 0) {
        this.hour = hour;
        this.minute = minute;
    }

    tick() {
        this.minute++;
        if (this.minute == 60) {
            this.minute = 0
            this.hour = (this.hour + 1) % 24;
        
        }
    }

    get time() {
        return this.hour.toString().padStart(2, '0') + ':' + this.minute.toString().padStart(2, '0')
    }

}
