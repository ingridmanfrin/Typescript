const array01 = [1, 2, 3];
const array02 = [4, 5, 6];

const arrayCombinado = [...array01, ...array02];

//console.log(arrayCombinado);

/*
    array01[3] array02[0]
*/

//let valor = array02[1]
//console.log(valor)

//Parametros Rest (serve para deixar nossas funções flexiveis)
function somarNumeros(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(somarNumeros());
console.log(somarNumeros(10, 20));
console.log(somarNumeros(10, 20, 30));