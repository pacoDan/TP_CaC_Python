//EJEMPLO 1:
/*
let promesa = new Promise(
    function(resolve, reject) {
        if (true) {
            resolve(`Funcionó!`);
        }
        else {
            reject(`Hay un error`);
        }
    }
);

promesa.then(function(respuesta) {
        console.log(`Respuesta: ${respuesta}`);
    })
    .catch(function(error) {
        console.log(`Error: ${error}`);
    })
    .finally(function() {
        console.log(`Esto se ejecuta siempre`);
    }); */

//EJEMPLO 2:

/* let x = 10;

const promesa = new Promise(
    function(resolve, reject) {
        if (x === 10) {
            resolve('La variable es igual a 10'); //Se resuelve satisfactoriamente la promesa
        } else {
            reject('La variable no es igual a 10'); //La promesa es rechazada
        }
    }
);
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
    }); */

//EJEMPLO 3:

/* let y = 20;
const promesa2 = new Promise(
    function(resolve, reject) {
        function procesar() {
            y = y * 3;
            console.log("2. Proceso terminado...");
            resolve(y);
        }
        setTimeout(procesar, 4000);
    }
);

console.log("1. Proceso iniciado...");

promesa2.then(function(resultado) {
    console.log(`3. El resultado es: ${resultado}`);
}); */

//EJEMPLOS PROMISE API:

/* let x = 10,
    y = 50,
    z = 30;

const p1 = new Promise(function(resolve, reject) {
    function delay() {
        if (x === 10) {
            resolve('La variable x es igual a 10'); //Se resuelve satisfactoriamente la promesa
        } else {
            reject('La variable x no es igual a 10'); //La promesa es rechazada
        }
    }
    setTimeout(delay, 1000); //La promesa se va a resolver luego de 1 segundo
});
const p2 = new Promise(function(resolve, reject) {
    function delay() {
        if (y === 20) {
            resolve('La variable y es igual a 20'); //Se resuelve satisfactoriamente la promesa
        } else {
            reject('La variable y no es igual a 20'); //La promesa es rechazada
        }
    }
    setTimeout(delay, 2000); //La promesa se va a resolver luego de 2 segundos
});
const p3 = new Promise(function(resolve, reject) {
    function delay() {
        if (z === 30) {
            resolve('La variable z es igual a 30'); //Se resuelve satisfactoriamente la promesa
        } else {
            reject('La variable z no es igual a 30'); //La promesa es rechazada
        }
    }
    setTimeout(delay, 3000); //La promesa se va a resolver luego de 3 segundos
}); */

//PROMISE ALL
/* Promise.all([p1, p2, p3])
    .then(function(valores) {
        //Array valores= ['La variable y es igual a 10','La variable x es igual a 20','La variable z es igual a 30']
        for (valor of valores) {
            console.log(valor);
        }
    })
    .catch(function(error) {
        console.error(`Error: ${error}`);
    }); */

//PROMISE ALL SETTLED

/* Promise.allSettled([p1, p2, p3])
    .then(function(valores) {
        valores.forEach(function(valor) {
            if(valor.status == "fulfilled")
                console.log(`Estado: ${valor.status} Valor: ${valor.value}`);
            else
                console.log(`Estado: ${valor.status} Valor: ${valor.reason}`);
        })
    }); */

//PROMISE ANY
/* Promise.any([p1, p2, p3])
    .then(function(respuesta) {
        console.log(`Estado: ${respuesta}`);
    })
    .catch(function(error2) {
        console.error(`Hubo un error: ${error2}`);
    }); */

//PROMISE RACE
/* Promise.race([p1, p2, p3])
    .then(function(respuesta) {
        console.log(`Estado: ${respuesta}`);
    })
    .catch(function(error) {
        console.error(`Hubo un error: ${error}`);
    }); */

//FETCH LEYENDO ARCHIVO DE TEXTO

fetch("./texto.txt")
    .then(function(respuesta) {
        console.log(respuesta);
        if (respuesta.ok) {
            return respuesta.text();
        } else {
            throw new Error(`${respuesta.status} ${respuesta.statusText}`);
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