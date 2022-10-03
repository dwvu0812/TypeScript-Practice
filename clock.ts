class Clock {
    private hour: number;
    private minute?: number;
    constructor (hour: number, minute?: number) {
        if (hour >= 0) {
            if (hour < 24) {
                this.hour = hour;
            } else if (hour === 24) {
                this.hour = 0;
            } else {
                let tmpHour = hour - (Math.floor(hour / 24) * 24);
                this.hour = tmpHour;
            }
        } else {
            if (hour > -24) {
                this.hour = 24 + hour;
            } else {
                let tmpHour = 24 - (-hour - (Math.floor(-hour / 24) * 24));
                this.hour = tmpHour;
            }
        }
        
    }
}