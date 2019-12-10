function somaVarios(... parametros: string[]): string{
    let result:string = " ";
    for (let i=0 ; i <parametros.length; i++){
        result += '<div id="id'+i+'"> '+parametros[i]+ '</div>\n'
    }
    return result;
}
console.log(somaVarios("Valor A","Valor B","Valor C","Valor D","Valor E","Valor F","Valor G"))