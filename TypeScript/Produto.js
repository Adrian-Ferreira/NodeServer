"use strict";
exports.__esModule = true;
var produtos = /** @class */ (function () {
    function produtos(_co, _no, _de, _pr, _es, _li) {
        this.codigo = _co;
        this.nome = _no;
        this.detalhes = _de;
        this.preco = _pr;
        this.estoque = _es;
        this.linkFotos = _li;
    }
    produtos.prototype.getCdigo = function () {
        return this.codigo;
    };
    produtos.prototype.setCdigo = function (_co) {
        this.codigo = _co;
    };
    produtos.prototype.getNome = function () {
        return this.nome;
    };
    produtos.prototype.setNome = function (_no) {
        this.nome = _no;
    };
    produtos.prototype.getDetalhes = function () {
        return this.detalhes;
    };
    produtos.prototype.setDetalhes = function (_de) {
        this.detalhes = _de;
    };
    produtos.prototype.getPreco = function () {
        return this.preco;
    };
    produtos.prototype.setPreco = function (_pr) {
        this.preco = _pr;
    };
    produtos.prototype.getEstoque = function () {
        return this.estoque;
    };
    produtos.prototype.setEstoque = function (_se) {
        this.estoque = _se;
    };
    produtos.prototype.getLinkFotos = function () {
        return this.linkFotos;
    };
    produtos.prototype.setLinkFotos = function (_li) {
        this.linkFotos = _li;
    };
    produtos.prototype.getInfo = function () {
        console.log("Produto = codigo: " + this.codigo + " / Nome: " + this.nome + " / Detalhes: " + this.detalhes + " / Pre\u00E7o: " + this.preco + " / Estoque: " + this.estoque + " / Imagem: " + this.linkFotos);
    };
    return produtos;
}());
exports.produtos = produtos;
