export class auto {
    marca: string;
    color: string;
    modelo: string;
    ruedas: number;
    puerta: number;
    constructor(_marca, _color, _modelo, _ruedas, _puerta) {
        this.marca = _marca;
        this.color = _color;
        this.modelo = _modelo;
        this.ruedas = _ruedas;
        this.puerta = _puerta;
    }
    mostrarAuto(){
        console.log(this.marca);
    }
    carrera(){
        console.log("ultimo modelo");
    }
    
}
let ferrari: auto = new auto("lamborgini", "rojo", "gt600", 4, 2)
ferrari.mostrarAuto();
ferrari.carrera();
console.log(ferrari.marca);
console.log(ferrari.color);
console.log(ferrari);



