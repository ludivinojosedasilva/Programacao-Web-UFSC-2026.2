//Cliente.js


class Cliente {
    //propriedades e funções da classe aqui
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.dataCadastro = new Date();
    }
    getIdade ()
    {
        return this.idade;
    }
    getNome()
    {
        return this.nome;
    }
}

export default Cliente;