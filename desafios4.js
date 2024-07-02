//1
console.log("Bienvenido al JavaScript");

//2
let nombreUsuario = "Yahinniel";
console.log(`Bienvenido ${nombreUsuario}`);

//3
alert(`Hola ${nombreUsuario}`)

//4
let lenguajeElegido = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(lenguajeElegido);

//5
let num1 = 5;
let num2 = 7;
let resultado = num1 + num2;

console.log(`La suma de ${num1} + ${num2} = ${resultado}`)

//6
let num1Rest = 5;
let num2Rest = 7;
let resultadoRest = num1 - num2;

console.log(`La suma de ${num1Rest} + ${num2Rest} = ${resultadoRest}`);

//7
let edadUsuario = prompt("Digite su edad:");

if (edadUsuario >= 18) {
    console.log('El usuario es mayor de edad');
}
else
{
    console.log('El usuario es menor de edad');
}

//8
let numero = parseInt(prompt("Digite un numero:"))

if (numero > 0 ) {
    console.log("El numero es positivo");
} else {
    console.log("El numero es negativo o cero");
}

//9
let numeroIncrementar = 1;

while (numeroIncrementar <= 10) {
    console.log(numeroIncrementar);
    numeroIncrementar++;
}

//10
let nota = 7;

if (nota > 7) {
    console.log("Aprobado");
}
else
{
    console.log("Repobrado");
}

//11
let numeroAleatorio = Math.floor(Math.random())+1;
console.log(numeroAleatorio);

//12
let numeroAletorio2 = Math.floor(Math.random()*10)+1;
console.log(numeroAletorio2);

//13
let numeroAletorio3 = Math.floor(Math.random()*1000)+1;
console.log(numeroAletorio3);