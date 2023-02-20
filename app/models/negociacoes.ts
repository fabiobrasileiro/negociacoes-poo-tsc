import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes :Array<Negociacao> = []

    adiciona(negociacao :Negociacao) {
        this.negociacoes.push(negociacao)
    }

    listar() :ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }
}