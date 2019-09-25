"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    Bar.prototype.setnombre = function (nom) {
        this.nombre = nom;
    };
    Bar.prototype.getnombre = function () {
        return this.nombre;
    };
    return Bar;
}());
exports.Bar = Bar;
var Barman = /** @class */ (function () {
    function Barman(nom, ape) {
        this.nombre = nom;
        this.apellido = ape;
    }
    Barman.prototype.setnombre = function (nom) {
        this.nombre = nom;
    };
    Barman.prototype.getnombre = function () {
        return this.nombre;
    };
    return Barman;
}());
exports.Barman = Barman;
var Trago = /** @class */ (function () {
    function Trago(nom, col, can) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = can;
    }
    Trago.prototype.setnombre = function (nom) {
        this.nombre = nom;
    };
    Trago.prototype.getnombre = function () {
        return this.nombre;
    };
    return Trago;
}());
exports.Trago = Trago;
var bar1 = new Bar("nueva era2", 500);
var bar2 = new Bar("el patio", 250);
var barman1 = new Barman("ale", "estrada");
var trago1 = new Trago("bebida", "negro", 1);
bar1.setnombre("el pueblo");
barman1.setnombre("infiltrado");
trago1.setnombre("muy caro");
console.log(bar1.getnombre());
console.log(barman1.getnombre());
console.log(trago1.getnombre());
console.log(bar1);
console.log(bar2);
console.log(barman1);
console.log(trago1);
