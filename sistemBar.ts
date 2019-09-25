export class Bar {
    private nombre: string;
    private capacidad: number;
    constructor(nom: string, cap: number) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    public setnombre(nom: string): void {
        this.nombre = nom;
    }
    public getnombre(): string {
        return this.nombre;

    }
}
export class Barman {
    private nombre: string;
    private apellido: string;
    constructor(nom: string, ape: string) {
        this.nombre = nom;
        this.apellido = ape;
    }
    public setnombre(nom: string): void {
        this.nombre = nom;
    }
    public getnombre(): string {
        return this.nombre;
    }
}
export class Trago {
    private nombre: string;
    private color: string;
    private cantidad: number;
    constructor(nom: string, col: string, can: number) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = can;
    }
    public setnombre(nom: string): void {
        this.nombre = nom;
    }
    public getnombre(): string {
        return this.nombre;

    }
}
let bar1: Bar = new Bar("nueva era2", 500);
let bar2: Bar = new Bar("el patio", 250);

let barman1: Barman = new Barman("ale", "estrada");
let trago1: Trago = new Trago("bebida", "negro", 1)

bar1.setnombre("el pueblo")
barman1.setnombre("infiltrado")
trago1.setnombre("muy caro")

console.log(bar1.getnombre());
console.log(barman1.getnombre());
console.log(trago1.getnombre());



console.log(bar1);
console.log(bar2);
console.log(barman1);
console.log(trago1);