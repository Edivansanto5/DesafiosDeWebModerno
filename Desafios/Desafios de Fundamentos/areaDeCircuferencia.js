/*
    Um dos sistemas de irrigação utilizados na Agronomia é o de pivô central. 
    Um braço de metal é preso por uma de suas extremidades ao centro de um círculo 
    e percorre um campo circular durante o dia irrigando os locais por onde passa, 
    de modo que a outra extremidade passa pela borda desse mesmo círculo. 
    O resultado obtido por esse sistema são plantações perfeitamente circulares.
    Supondo que o braço utilizado para irrigação de um campo circular tenha o comprimento de 300 metros,
    qual será a área irrigada por ele em uma volta? (π = 3,14)
*/
let raio = 300;
let PI = 3.14;
let areaCircuferencia = PI * Math.pow(raio,2)
console.log('A área é ' ,areaCircuferencia,'m2')
