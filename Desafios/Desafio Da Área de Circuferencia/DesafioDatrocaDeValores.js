// Aqui o desafio e trocar os valores das variaveis
/*  let a = 4
    let b = 5
    logo depois que vc fizer a troca em vez de a == 4 vai ser a == 5  e virse e versa
    tipo console.log(a) = 5
    tipo console.log(b) = 4
    será que vc consegue?
*/
let a = 42; // podem ser var, mais nunca const
let b = 5;
let temporaria = a;
console.log('valores original')
console.log('numero a = ' + a);
console.log('numero b = ' + b);

console.log('')

console.log('Depois das trocas')
a = b;
b = temporaria;
console.log('numero a = ' + a);
console.log('numero b = ' + b);

// ou para trocar podemos fazer apenas o seguinte [a , b] = [ b , a]