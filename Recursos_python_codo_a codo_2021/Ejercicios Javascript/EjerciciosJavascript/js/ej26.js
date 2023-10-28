let arr = [];
let n = Number(prompt("Ingrese un número:"));
for(let i=0;i<n;i++){
    arr[i]= Math.floor(Math.random() * 100) + 1;
    document.write(arr[i]+"<br>");
}