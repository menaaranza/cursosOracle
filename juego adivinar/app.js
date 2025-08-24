let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Felicidades! Adivinaste el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor que ' + numeroDeUsuario);
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor que ' + numeroDeUsuario);
        }
    } 
    intentos++; 
    limpiarCaja();

    return; 
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){ 
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    return numeroSecreto;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto /ᐠ - ˕ -マ');
    asignarTextoElemento('p', 'Selecciona un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();

    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();

    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();