//1
function ConcatenarOlaENome(nome: string) {
    return 'Olá ' + nome
}

let resultadoConcatenacao: string  = ConcatenarOlaENome('Aline');

console.log(resultadoConcatenacao);

//2
function MultiplicarDoisNumeros(numero1: number, numero2: number){
    return numero1 * numero2
}
let resultadoSoma: number = MultiplicarDoisNumeros(2,2)
console.log(resultadoSoma)

//3
function UnirAnoESala(sala: string, ano: number){
    return ano + 'º' + ' ' + sala
}
let ConcatenaAnoESala = UnirAnoESala('B',2)
console.log(ConcatenaAnoESala)