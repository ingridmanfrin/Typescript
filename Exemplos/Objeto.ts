interface TurmaModelo {
    nome: string
    qtd: number
    materia: string
    p_instrutora: string
}

const Turma: TurmaModelo = { 
    nome: "Turma .Net",
    qtd: 32,
    materia: "Full Stack C#",
    p_instrutora: "Jacque"
    //CONTRL + ESPAÇO para "autopreencher" os parâmetros que faltam
}

console.log(Turma)

const Turma2: TurmaModelo = { 
    nome: "Turma Js",
    qtd: 28,
    materia: "Js",
    p_instrutora: "Yuri"

}
console.log(Turma2)
