import { Aluno } from "./Alunos";
import { Professor } from "./Professor";

console.log("----------------------------------");
var a: Aluno;
a = new Aluno();
a.setNumRegistro(1235);
a.setNome("Matheus Matiusch");
a.setEmail("Mat@tiuschcorp.com");
a.setTelefone("+55 11 12345-6789");
a.setCurso("Dev. Web JJ ");
a.setAnoMatricula(2019);
console.log(a);

console.log("----------------------------------");

var d: Professor; 
d = new Professor();
d.setNumRegistro(4005);
d.setNome("Adrian Boladão");
d.setEmail("adr@adrcorp.com");
d.setTelefone("+55 11 94578-9778");
d.setValorHora(500);
d.setNumHora(150);
d.setAreaFormacao("Mito Da Computação");
console.log(d);

