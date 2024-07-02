//Esto fue lo que aprendimos en clase
alert('Bienvenidos al juego del número secreto');

let maxNumeroSecreto = parseInt(prompt("Hasta donde quieres que sea el rango del numero a adivinar?"));

let numeroSecreto = Math.floor(Math.random()*maxNumeroSecreto)+1;
let numeroUsuario = 0;
let intentos = 1;
let maxIntentos = intentos > 99 ? 9 : 6;
// let palabraVeces = "vez";

while (numeroSecreto != numeroUsuario) {

    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${maxNumeroSecreto} por favor:`));
    
    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la concidion
        alert('Acertaste el numero.' + ` El numero fue: ${numeroSecreto}. Lo hiciste en ${intentos} ${ intentos == 1 ? 'vez' : 'veces' }`);
    }
    else {
    
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }

        //Incrementamos el contador cuando no acierta
        intentos++;
        // palabraVeces = "veces";
        if (intentos > maxIntentos) {
            alert(`Llegaste al numero maximo de ${maxIntentos} intentos`);
            break;
        }

        //La condicion no se cumplio
        // alert('Lo siento, no acertaste el numero');
        // console.log('El numero digitado fue: ' + numeroUsuario)
    }
}

//Ejercicio que hice por mi propia cuenta 
// let edadUsuario = prompt("Digite tu edad:");
// let nombreUsuario = prompt("Digite su nombre:");
// alert('Tu nombre es ' + nombreUsuario + ' y tu edad es ' +edadUsuario);