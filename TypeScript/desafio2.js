function somaVarios() {
    var parametros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parametros[_i] = arguments[_i];
    }
    var result = " ";
    for (var i = 0; i < parametros.length; i++) {
        result += '<div id="id' + i + '"> ' + parametros[i] + '</div>\n';
    }
    return result;
}
console.log(somaVarios("Valor A", "Valor B", "Valor C", "Valor D", "Valor E", "Valor F", "Valor G"));
