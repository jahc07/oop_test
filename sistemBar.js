"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    return Bar;
}());
exports.Bar = Bar;
var barman = /** @class */ (function () {
    function barman(nom, ape) {
        this.nombre = nom;
        this.apellido = ape;
    }
    return barman;
}());
exports.barman = barman;
var trago = /** @class */ (function () {
    function trago(nom, col, can) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = can;
    }
    return trago;
}());
exports.trago = trago;
var bar1 = new Bar("nueva era2", 500);
var bar2 = new Bar("el patio", 250);
var barman1 = new barman("ale", "estrada");
var trago1 = new trago("bebida", "negro", 1);
console.log(bar1);
console.log(bar2);
console.log(barman1);
console.log(trago1);
