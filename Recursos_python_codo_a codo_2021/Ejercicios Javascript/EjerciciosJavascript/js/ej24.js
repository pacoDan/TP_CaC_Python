let arr = [1, 2, 3, 4, 5, 6];

/* let i = 0;
while(i<arr.length){
    
    document.write(arr[i]+"<br>");
    i++;
} */

/* for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}*/

/*  arr.forEach(function(elemento){
    document.write(elemento + "<br>");
 }) */

/* for (let i = 0; i < arr.length; i++) {
    document.write((arr[i]+1) + "<br>");
} */

let suma = 0;
for (let i = 0; i < arr.length; i++) {
    suma=suma+arr[i];
}
document.write((suma/arr.length));