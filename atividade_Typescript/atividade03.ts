interface Produto {
    nome: string
    marca: string
    descricao: string
    preco: number
}

const Produto1: Produto = { 
    nome: "Batom",
    marca:'Bruna Tavares',
    descricao:"Batom Líquido Matte",
    preco: 40,
}

const Produto2: Produto = { 
    nome: "Blush",
    marca:'Ruby Rose',
    descricao:"Paleta de blush Feels Mood",
    preco: 55,
}

let listaProdutos: Produto[] = [Produto1, Produto2]

const constListaProdutos = [...listaProdutos];
console.log(constListaProdutos);

