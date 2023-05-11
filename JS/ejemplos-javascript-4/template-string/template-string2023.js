//Template string
var nombre = "Pablo", apellido = "Pérez"
var num1 = 23, num2 = 15

document.write(`Hola ${nombre} ${apellido} <br>`) //Interpolar cadenas
document.write(`La suma entre ${num1} y ${num2} es ${num1+num2} <br><br>`) //Evaluar expresiones

function mostrarEdad(e){
    return `tu tienes ${e} años`
}
document.write(`Hola! ${mostrarEdad(45)} <br><br>`) //usar funciones

function tabla(x){
    document.write(`Tabla del ${x} <br>`)
    for (let i=1; i<=10; i++){
        document.write(`${x} x ${i} = ${x*i} <br>`) //Evaluar expresiones
    }
    document.write("<br>")
}
tabla(9)

var jugador = {
    nombre: 'Lionel',
    apellido: 'Messi',
    fec_nac: '24/06/1987',
    club: 'PSG'
}

//uso con funciones y objetos
function mostrarDatosJugador(nombre, apellido, fec_nac, club){
    apellido = apellido.toUpperCase()
    return `${nombre} ${apellido} nació el ${fec_nac}, actualmente juega en ${club}.`
}
datos = mostrarDatosJugador(jugador.nombre, jugador.apellido, jugador.fec_nac, jugador.club)
document.write(datos)