"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.getPlaca = function () {
        return this.placa;
    };
    Carro.prototype.setPlaca = function (_placa) {
        this.placa = _placa;
    };
    Carro.prototype.ligar = function () {
        this.ligado = true;
        console.log("Carro " + this.modelo + "  acabou de ser ligado");
    };
    Carro.prototype.desligar = function () {
        this.ligado = false;
        console.log("Carro " + this.modelo + " esta desligado");
    };
    Carro.prototype.andar = function () {
        // mostrando mensagens usando concatenações
        if (this.ligado) {
            console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " ta andando...");
        }
        else {
            console.log("Para andar, ligue o carro " + this.modelo);
        }
    };
    Carro.prototype.parar = function () {
        // mostrando mensagens usando expression languages
        if (this.ligado) {
            console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " acabou de parar");
        }
        else {
            console.log("Num da pra estacionar um carro desligado " + this.modelo);
        }
    };
    Carro.prototype.getInfo = function () {
        var info;
        info = "CARRO: " + this.modelo + " / " + this.ano + " / " + this.placa + " / " + this.cor;
        return info;
    };
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setCor = function (cor) {
        this.cor = cor;
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    Carro.prototype.setAno = function (ano) {
        this.ano = ano;
    };
    return Carro;
}());
exports.Carro = Carro;
