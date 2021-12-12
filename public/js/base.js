const nome = "Daniel Pereira";
let nome2 = "";
let pessoaDefault = {
    nome: "Daniel Pereira",
    idade: "36",
    trabalho: "Programador"
}

let nomes = ["Daniel Pereira", "Giovana Borba", "Giovanna Pereira"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Daniel Pereira",
        idade: "36",
        trabalho: "Programador"
    },
    {
        nome: "Giovana Borba",
        idade: "38",
        trabalho: "Programadora"
    }
];


function alterarNome() {
    nome2 = "DanielPereira";
    console.log("valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome");
    console.log(nome2);
}

function imrpimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("----------IMPRIMIR PESSOAS----------");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Daniel",
    idade: "36",
    trabalho: "programador"
});

imprimirPessoas();

//imrpimirPessoa(pessoaDefault);

//imrpimirPessoa({
    //  nome: "Giovana Borba",
    //idade: "38",
    //trabalho: "Programadora"
//});



//recebeEalteraNome("daniel pereira");
//recebeEalteraNome("pereira daniel");

//alterarNome();

