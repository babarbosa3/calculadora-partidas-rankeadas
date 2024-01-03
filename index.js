function calcularSaldo(numVitorias, numDerrotas) {
    let saldoRank = numVitorias - numDerrotas
    return saldoRank
}

function definirRank() {
    let classNivel = ""
    if (saldo < 10) {
        classNivel = "Ferro"
    } else if (saldo >= 11 && saldo <= 20) {
        classNivel = "Bronze"
    } else if (saldo >= 21 && saldo <= 50) {
        classNivel = "Prata"
    } else if (saldo >= 51 && saldo <= 80) {
        classNivel = "Ouro"
    } else if (saldo >= 81 && saldo <= 90) {
        classNivel = "Diamante"
    } else if (saldo >= 91 && saldo <= 100) {
        classNivel = "Lendário"
    } else if (saldo >= 101) {
        classNivel = "Imortal"
    }
    return classNivel
}

let saldo = calcularSaldo(150, 20)
let nivel = definirRank()

console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}`)