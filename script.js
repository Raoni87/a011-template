const estudante = {
    nome: "Raoni",
    sobrenome: "Salgado Marques",
    numeroMatricula: 4520902,
    notasSemestre: [7, 10, 10],
}

estudante.modulo = "Javascript";

console.log(estudante);
console.log("Nome do Estudante", estudante.nome);
console.log("Segunda Nota", estudante.notasSemestre[2]);
console.log("Modulo:", estudante["modulo"]);

const novoEstudante = {...estudante};

console.log(novoEstudante);

novoEstudante.nome = "Astrodev";
novoEstudante.modulo = "Proximo Modulo";
novoEstudante.notasSemestre = [...estudante.notasSemestre, 9];
// forma com push (Precisa fazer o slice antes, para criar uma cópia do array) - novoEstudante.notasSemestre.push(9);

console.log(novoEstudante.nome);
console.log(novoEstudante.modulo);
console.log(novoEstudante.notasSemestre);

const estudantesLabenu = [];
estudantesLabenu.push(estudante, novoEstudante);

console.log(estudantesLabenu);

const carrinho = {
    nome: "Raoni",
    formaPgto: "cartão de débito",
    endereço: "Alameda Edimburgo, 63"
}

console.log(carrinho);

carrinho.compras = [{nomeDoProduto: "macarrão", precoDoProduto: "R$ 2,55", quantidade: 3}];

console.log(carrinho);

const carrinhoPresente = {...carrinho};

carrinhoPresente.nome = "Gabriel";
carrinhoPresente.formaPgto = "cartão presente";

console.log(carrinhoPresente);