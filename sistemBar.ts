export class Bar {
    nombre: string;
    capacidad: number;
    constructor(nom: string, cap: number) {
        this.nombre = nom;
        this.capacidad = cap;
    }
}
export class barman {
    nombre: string;
    apellido: string;
    constructor(nom: string, ape: string) {
        this.nombre = nom;
        this.apellido = ape;
    }
}
export class trago {
    nombre: string;
    color: string;
    cantidad: number;
    constructor(nom: string, col: string, can: number) {
        this.nombre = nom
        this.color = col
        this.cantidad = can
    }
}
let bar1: Bar = new Bar("nueva era2", 500);
let bar2: Bar = new Bar("el patio", 250);

let barman1: barman = new barman("ale", "estrada");
let trago1 : trago = new trago("bebida", "negro", 1)

console.log(bar1);
console.log(bar2);
console.log(barman1);
console.log(trago1);