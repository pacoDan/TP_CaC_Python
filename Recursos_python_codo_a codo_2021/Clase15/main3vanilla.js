//////LO MISMO CON VANILLA
let formulario =  document.querySelector("form");
let ul = document.querySelector("ul");
let input =  document.querySelector(".input");
let tareas = [];

formulario.onsubmit = ev=>{
    ev.preventDefault();//detenemos el submit
    tareas.push(input.value);
    //1creamos el elemento
    let li = document.createElement("li");
    //2le metemos valor
    li.innerHTML=input.value;
    //3 lo posicionamos bajo el ul
    ul.appendChild(li);

    input.value=null; //lo dejo vacio para que rellenen
}