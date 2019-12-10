import teclado = require("readline-sync");
var titulo : string = teclado.question("Escreva o titulo ");
var descrição : string = teclado.question("Escreva a descricao ");
var html : string = "<html><head><title> .: Meu site :. <title/><head/><body><h1> "+titulo+" <h1/><hr/><p>"+descrição+"<p/><body/><html/>";

console.log(html);





