/* const func = function(){
    return "Hola";
};

console.log(func()) */

//IIFE               
(function(name) {
    console.log("¡Hola, ",name);
})("Emiliano");

//Closures 

/* const incr = (function() {
    let num = 0;
    return function() {
        console.log(`Valor Actual: ${num}`);
        num++;
        console.log(`Valor Incrementado: ${num}`);
        return num;
    };
})();


typeof incr; // 'function'
incr(); // 1
incr(); // 2
incr(); // 3 */

// fB = Función B
/* const fB = function () {
    console.log("Función B ejecutada.");
}; */
// fA = Función A
/* const fA = function (callback) {
    callback();
};

fA(fB); */


 