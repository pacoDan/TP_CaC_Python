let ingreso = prompt("Ingrese 3 palabras separadas por coma");
let arr = ingreso.split(",");

for(let i=0;i<arr.length;i++){
    document.write(arr[i]+"<br>");
}