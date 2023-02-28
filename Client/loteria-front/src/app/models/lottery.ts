export class Lottery {
    public id: number = 0;
    public ticketPrice: number = 0;
    public ticketsCount: number = 0;
    public balance: number = 0;
    public finalized: boolean = false;
    public winnerAdress: string = '';
    public tax: number = 5;
    public img: string = '../../../assets/img/binance-usd-busd-logo.png';

    constructor() { }

    public generateLottery(): void {
        this.id = this.getRandomNumberBetween(1, 10000);
        this.ticketPrice = this.getRandomNumberBetween(1, 5);
        this.ticketsCount = 0;
        this.balance = 0;
        this.finalized = false;
        this.winnerAdress = '';
    }

    private getRandomNumberBetween(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max + 1);
        const result = Math.floor(Math.random() * (max - min)) + min;
        console.log('min', min, 'max', max - 1, 'res', result);
        return result;
    }
}
