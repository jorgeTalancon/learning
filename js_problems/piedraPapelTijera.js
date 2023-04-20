// Pedir a jugador piedra papel o tijera
// Generar al azar piedra, papel o tijera para computadora
// comparar resultados, sumar punto si gano, sumar punto a la compu si esta gana o 0 puntos si hay empate
// Mensaje con el resultado parcial
// Cuando la pc o tu lleguen a 3 puntos, terminar juego y mencionar al ganador junto con los resultados. 




// Menciona lo que elegiste
function eleccionDelJugador(seleccionJugador) {
    if (seleccionJugador === 1 ) {
        alert('elegiste piedra');
    } else if (seleccionJugador === 2 ) {
        alert('elegiste papel');
    } else if (seleccionJugador === 3 ) {
        alert('elegiste tijera');
    } else {
        alert('elegiste algo incorrecto. Intenta de nuevo.');
    } 
}


// Menciona lo que la PC eligio
function eleccionDelaCompu(seleccionCompu) {
    if (seleccionCompu === 1 ) {
        alert('la computadora eligio piedra');
    } else if (seleccionCompu === 2 ) {
        alert('la computadora eligio papel');
    } else if (seleccionCompu === 3 ) {
        alert('la computadora eligio tijera');
    } 
}

// Comparacion

function comparar(seleccionJugador, seleccionCompu) {
    if (seleccionJugador === 1 && seleccionCompu === 2 ) {
        alert('PERDISTE');
        puntosComputadora+= 1;
    } 
    else if (seleccionJugador === 1 && seleccionCompu === 3 ) {
        alert('GANASTE');
        puntosJugador+= 1;
    }
    else if (seleccionJugador === 2 && seleccionCompu === 1) {
        alert('GANASTE');
        puntosJugador+= 1;
        
    }
    else if (seleccionJugador === 2 && seleccionCompu === 3 ) {
        alert('PERDISTE');
        puntosComputadora+= 1;
    }
    else if (seleccionJugador === 3  && seleccionCompu === 1 ) {
        alert('PERDISTE');
        puntosComputadora+= 1;
    }
    else if (seleccionJugador === 3  && seleccionCompu === 2 ) {
        alert('GANASTE');
        puntosJugador+= 1;
    } else {
        alert('EMPATE');
    }
}


var puntosJugador = 0;
var puntosComputadora = 0;
/*
while (puntosJugador < 3 ) {
    let seleccionJugador = Number(prompt('Elige tu jugada; 1 para piedra, 2 para papel o 3 para tijera'));
    eleccionDelJugador(seleccionJugador);
    let seleccionCompu = (Math.floor(Math.random()*(4-1)+1));
    eleccionDelaCompu(seleccionCompu);
    puntosJugador += 1
}
*/

while(puntosJugador < 3) {

    var seleccionJugador = Number(prompt('Elige tu jugada; 1 para piedra, 2 para papel o 3 para tijera'));
    eleccionDelJugador(seleccionJugador);
    var seleccionCompu = (Math.floor(Math.random()*(4-1)+1));
    eleccionDelaCompu(seleccionCompu);

    if (seleccionJugador === 1 && seleccionCompu === 2 ) {
        alert('PERDISTE');
        puntosComputadora+= 1;
    } 
    else if (seleccionJugador === 1 && seleccionCompu === 3 ) {
        alert('GANASTE');
        puntosJugador+= 1;
    }
    else if (seleccionJugador === 2 && seleccionCompu === 1) {
        alert('GANASTE');
        puntosJugador+= 1;
        
    }
    else if (seleccionJugador === 2 && seleccionCompu === 3 ) {
        alert('PERDISTE');
        puntosComputadora+= 1;
    }
    else if (seleccionJugador === 3  && seleccionCompu === 1 ) {
        alert('PERDISTE');
        puntosComputadora+= 1;
    }
    else if (seleccionJugador === 3  && seleccionCompu === 2 ) {
        alert('GANASTE');
        puntosJugador+= 1;
    } else {
        alert('EMPATE');
    }

}










