/*
    Planeja-se construir uma piscina circular com uma ilha no meio, também circular. Sabendo que o raio da ilha possui 30 metros e que o raio da piscina possui 50 metros, qual é a área da superfície da piscina? (π = 3,14)
*/
let PI = 3.14
let raioSuperficePis = 50
let raioDaIlha = 30

let areaSuper = PI * Math.pow(raioSuperficePis,2)
let areaIlha = PI * Math.pow(raioDaIlha,2)
let areaSuperfTotal = areaSuper - areaIlha

console.log('Área total da surperfice da Piscina é ',areaSuperfTotal + 'm2')
console.log('Área da surperfice da piscina é ',areaSuper + 'm2')
console.log('Área da surperfice da ilha da piscina é ',areaIlha + 'm2')

