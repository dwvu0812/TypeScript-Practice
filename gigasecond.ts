class Gigasecond {
    private oldDate: Date;

    constructor (date: Date) {
        this.oldDate = date;
    }

    public date(): Date {
        return new Date(this.oldDate.getTime() + 1e12);
    }
}

const date = new Gigasecond(new Date());
console.log(date.date());
console.log(new Date());
