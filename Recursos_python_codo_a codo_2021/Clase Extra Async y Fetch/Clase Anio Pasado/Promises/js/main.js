/*let x = 10;

const promesa = new Promise(function(resolve, reject) {
    if (x === 10) {
        resolve('La variable es igual a 10'); //Se resuelve satisfactoriamente la promesa
    } else {
        reject('La variable no es igual a 10'); //La promesa es rechazada
    }
});
//Then se ejecuta cuando la promesa se haya resuelto satisfactoriamente
promesa.then(function(resultado) {
        console.log(`Éxito: ${resultado}`);
    })
    //Catch se ejecuta cuando la promesa es rechazada
    .catch(function(error) {
        console.error(`Error: ${error}`);
    })
    .finally(function() {
        console.warn("Siempre se muestra este mensaje");
    });*/

/*
let y = 20;
const promesa2 = new Promise(function(resolve, reject) {

    function procesar() {
        y = y * 3;
        console.log("2. Proceso terminado...");
        resolve(y);
    }

    setTimeout(procesar, 2000);
});

console.log("1. Proceso iniciado...");

promesa2.then(function(resultado) {
    console.log(`3. El resultado es: ${resultado}`);
});
*/
/*let x = 10,
    y = 20,
    z = 30;

const p1 = new Promise(function(resolve, reject) {
    if (x === 10) {
        resolve('La variable y es igual a 10'); //Se resuelve satisfactoriamente la promesa
    } else {
        reject('La variable y no es igual a 10'); //La promesa es rechazada
    }
});
const p2 = new Promise(function(resolve, reject) {
    if (y === 20) {
        resolve('La variable x es igual a 20'); //Se resuelve satisfactoriamente la promesa
    } else {
        reject('La variable x no es igual a 20'); //La promesa es rechazada
    }
});
const p3 = new Promise(function(resolve, reject) {
    if (z === 30) {
        resolve('La variable z es igual a 30'); //Se resuelve satisfactoriamente la promesa
    } else {
        reject('La variable z no es igual a 30'); //La promesa es rechazada
    }
});*/

/*Promise.all([p1, p2, p3]).then(function(valores) {
        for (valor of valores) {
            console.log(valor);
        }
    })
    .catch(function(error) {
        console.error(`Error: ${error}`);
    });*/

/*Promise.allSettled([p1, p2, p3])
    .then(function(valores) {
        valores.forEach(function(valor) {
            console.log(`Estado: ${valor.status} Valor: ${valor.value}`);
        })
    })
    .catch(function(error) {
        console.error(`Error: ${error}`);
    });*/

/*Promise.any([p1, p2, p3])
    .then(function(respuesta) {
        console.log(`Estado: ${respuesta}`);
    })
    .catch(function(error) {
        console.error(`Hubo un error: ${error}`);
    });*/

/*Promise.race([p1, p2, p3])
    .then(function(respuesta) {
        console.log(`Estado: ${respuesta}`);
    })
    .catch(function(error) {
        console.error(`Hubo un error: ${error}`);
    });*/



fetch("/texto.txt")
    .then(function(respuesta) {
        if (respuesta.ok) {
            return respuesta.text();
        } else {
            throw new Error(respuesta.status);
        }
    })
    .then(function(datos) {
        console.log("Datos: " + datos);
    })
    .catch(function(error) {
        console.error("Error: ", error.message);
    })
    .finally(function() {
        console.warn("Ejemplo 1: Finally");
    });