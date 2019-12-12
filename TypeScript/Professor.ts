
import { Pessoa } from "./Pessoa";
export class Professor extends Pessoa{
    private ValorHora     : number;
    private numHoras      : number;
    private areaFormacao  : string;

    public getValorHora(): number{
        return this.ValorHora
    }
    public setValorHora(ValorHora: number): void{
        this.ValorHora = ValorHora
    }

    public getNumHora(): number{
        return this.numHoras
    }
    public setNumHora(numHoras: number): void{
        this.numHoras = numHoras
    }

    public getAreaFormacao(): string{
        return this.areaFormacao
    }
    public setAreaFormacao(areaFormacao: string): void{
        this.areaFormacao = areaFormacao
    }
    
} 