export class Athlete {
    public id: number = 0;
    public name: string = '';
    public gender: string = '';
    public height: number = 0;
    public weight: number = 0;
    public strength: number = 0;
    public agility: number = 0;
    public inteligence: number = 0;
    public preference: string = '';
    public category: string = '';
    public energy: number = 3;
    public maxEnergy: number = 3;
    public img: string = '';
    public contractPlays: number = 0;
    public maxContractPlays: number = 45;
    public contractValue: number = 400;
    public claimValue: number = 1000;

    constructor() { }

    public generateAthlete(): void {
        this.id = this.getRandomNumberBetween(1, 10000);
        this.name = this.getRandomName();
        this.gender = this.getRandomGender();
        this.height = this.getRandomNumberBetween(150, 210);
        this.weight = this.getRandomNumberBetween(50, 120);
        this.strength = this.getRandomNumberBetween(1, 100);
        this.agility = this.getRandomNumberBetween(1, 100);
        this.inteligence = this.getRandomNumberBetween(1, 100);
        this.preference = this.getRandomPreference();
        this.category = this.getRandomCategory();
        this.energy = this.getRandomNumberBetween(0, 3);
        this.maxEnergy = 3;
        this.contractPlays = this.getRandomNumberBetween(1, 45);
        this.contractValue = this.getRandomNumberBetween(400, 1000);
        this.claimValue = this.getRandomNumberBetween(1000, 3500);
        this.img = this.getImg();
    }

    public getRandomNumberBetween(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max + 1);
        const result = Math.floor(Math.random() * (max - min)) + min;
        console.log('min', min, 'max', max - 1, 'res', result);
        return result;
    }

    public getRandomGender(): string {
        const randomNumber = this.getRandomNumberBetween(1, 3);
        switch (randomNumber) {
            case 1: return 'Male';
            case 2: return 'Female';
            case 3: return '?';
            default: return '?';
        }
    }

    public getRandomName(): string {
        const randomNumber = this.getRandomNumberBetween(1, 5);
        switch (randomNumber) {
            case 1: return 'Josival "Neves" Santos';
            case 2: return 'Marisa "Tijolo" Dunga';
            case 3: return 'Fabio "Nariz" Ramos';
            case 4: return 'Jose "Careca" Silva';
            case 5: return 'Jaqueline "Topeira" Ferreira';
            default: return '?';
        }
    }

    public getRandomPreference(): string {
        const randomNumber = this.getRandomNumberBetween(1, 3);
        switch (randomNumber) {
            case 1: return 'Box';
            case 2: return 'Soccer';
            case 3: return 'Swimming';
            default: return '?';
        }
    }

    public getRandomCategory(): string {
        const randomNumber = this.getRandomNumberBetween(1, 4);
        switch (randomNumber) {
            case 1: return 'Amateur';
            case 2: return 'Professional';
            case 3: return 'Champion';
            case 4: return 'Legend';
            default: return '?';
        }
    }

    public getImg(): string {
        switch (this.preference) {
            case 'Box': return '../../../assets/img/player-boxer.jpg';
            case 'Swimming': return '../../../assets/img/player-swimmer.jpg';
            default: return '../../../assets/img/player-boxer.jpg';
        }
    }
}
