"use strict";
exports.__esModule = true;
var Carro_1 = require("./Carro");
var c1; // aqui apenas declarei uma "referencia" a um carro, preciso criar o objeto
var c2;
c1 = new Carro_1.Carro(); // agora sim, aloquei (reservei) memória para armazenar as coisas
c2 = new Carro_1.Carro();
// vamos preencher os dados
c1.setAno(2017);
c1.setModelo("MiniCooper");
c1.setPlaca("ABC1234");
c1.setCor("preto");
c2.setAno(2019);
c2.setModelo("Ferrari");
c2.setPlaca("EUA2019");
c2.setCor("Metal com tons pasteis e detalhes em cinza escuro");
// vamos manipular o carro com suas operações
console.log("------- Inicio da execucao...");
console.log(c1.getInfo());
console.log(c2.getInfo());
c1.andar();
c1.parar();
console.log("");
c2.ligar();
c2.andar();
c2.parar();
c2.desligar();
console.log(c1.getInfo());
console.log(c2.getInfo());
console.log("------- Final da execucao...");
