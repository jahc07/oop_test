"use strict";
exports.__esModule = true;
var auto = /** @class */ (function () {
    function auto(_marca, _color, _modelo, _ruedas, _puerta) {
        this.marca = _marca;
        this.color = _color;
        this.modelo = _modelo;
        this.ruedas = _ruedas;
        this.puerta = _puerta;
    }
    auto.prototype.mostrarAuto = function () {
        console.log(this.marca);
    };
    auto.prototype.carrera = function () {
        console.log("ultimo modelo");
    };
    return auto;
}());
exports.auto = auto;
var ferrari = new auto("lamborgini", "rojo", "gt600", 4, 2);
ferrari.mostrarAuto();
ferrari.carrera();
console.log(ferrari.marca);
console.log(ferrari.color);
console.log(ferrari);
