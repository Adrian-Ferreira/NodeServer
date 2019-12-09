"use strict";
exports.__esModule = true;
var teclado = require("readline-sync");
var titulo = teclado.question("Escreva o titulo ");
var descrição = teclado.question("Escreva a descricao ");
var html = "<html><head><title> .: Meu site :. <title/><head/><body><h1> " + titulo + " <h1/><hr/><p>" + descrição + "<p/><body/><html/>";
console.log(html);
