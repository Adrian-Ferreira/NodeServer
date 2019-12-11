export class produtos {
  
    private codigo : number;
    private nome : string;
    private detalhes : string;
    private preco : number;
    private estoque : number;
    private linkFotos : string;

   
   
   public constructor(_co: number, _no: string, _de: string, _pr: number, _es: number, _li: string) {    
       
    this.codigo    = _co;
    this.nome      = _no;
    this.detalhes  = _de;
    this.preco     = _pr;
    this.estoque   = _es;
    this.linkFotos = _li;
       
   }

   public getCdigo(): number{
       return this.codigo
   }
   public setCdigo(_co: number): void{
    this.codigo = _co;

   }

   public getNome(): string{
    return this.nome
   }
   public setNome(_no: string ): void{
    this.nome = _no;

   }
   public getDetalhes(): string{
    return this.detalhes
   }
   public setDetalhes(_de: string): void{
    this.detalhes = _de;
   }

   public getPreco(): number{
    return this.preco
   }
   public setPreco(_pr: number): void{
    this.preco = _pr;
   }

   public getEstoque(): number{
    return this.estoque
   }
   public setEstoque(_se: number): void{
       this.estoque = _se;
   }

   public getLinkFotos(): string{
       return this.linkFotos
   }
   public setLinkFotos(_li: string): void{
       this.linkFotos = _li;
   }
 
    public getInfo(): void{
      console.log(`Produto = codigo: ${this.codigo} / Nome: ${this.nome} / Detalhes: ${this.detalhes} / Preço: ${this.preco} / Estoque: ${this.estoque} / Imagem: ${this.linkFotos}`)
    }
}