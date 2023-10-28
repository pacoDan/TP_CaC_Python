let arr = ["azul","amarillo","rojo","verde","café","rosa"];
let ingreso = prompt("Ingrese un color:");
let flag = false;
for(let i = 0; i<arr.length;i++){
    if(ingreso==arr[i]){
        document.write("Elemento encontrado.");
        flag=true;
        break;
    }
}

if(flag==false){
    document.write("Elemento no encontrado.");    
}
