export class Product {
    category: string;
    team: string;
    price: number;
    image: string;

    constructor(category: string, team: string, price: number, image: string){
        this.category = category;
        this.team = team;
        this.price = price;
        this.image = image;
    }
}