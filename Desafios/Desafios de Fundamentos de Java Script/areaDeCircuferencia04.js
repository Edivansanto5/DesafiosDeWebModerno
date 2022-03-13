/*
A área onde será construído um shopping é circular e tem medida igual a 70650 m2. 
Qual é o raio do círculo descrito por essa área? (π = 3,14).

*/
let PI = 3.14;
let areaTotal = 70650 ;

/*Aqui vai dividir o valor total da circuferência por o valor do PI*/ 
let divisaoArea = areaTotal/PI

/*
    Aqui como ja sabemos a reposta da divisão agora so basta saber qual e a raiz desse valor.
    para assim saber qual e o seu raio.
    para ver o resultado da divisão acima so basta da um console.log(divisaoArea).
    A funão Maht.sqrt() ela vai pegar um numero e da sua raiz quadrada.
*/
let raizquadrada = Math.sqrt(divisaoArea)
console.log("O valor do raio é " + raizquadrada + 'm')


