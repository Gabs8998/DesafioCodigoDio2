let vitorias = 170
let derrotas = 45
let resultado = saldoDeVitorias(vitorias,derrotas)
let patente = vitorias-derrotas

function saldoDeVitorias(vitorias,derrotas){
    let saldo = vitorias-derrotas
    console.log(saldo)
    return saldo;
}

if(patente <= 10) {
    patente = "ferro"
}
    else if( patente >= 11 && patente <= 20 ){
        patente = "bronze"
    }
    else if( patente >= 21 && patente <= 50 ){
        patente = "prata"
    }else if( patente >= 51 && patente <= 80 ){
        patente = "Ouro"
    }else if( patente >= 81 && patente <= 90 ){
        patente = "Diamante"
    }else if( patente >= 91 && patente <= 100 ){
        patente = "Lendário "
    }else if(patente >= 101 ){
        patente = "Imortal"
    }
    
console.log("O héroi tem saldo de " + resultado + " e está no nível " + patente)