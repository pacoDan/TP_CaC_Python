let sidebar = document.getElementById("sidebar");
let sidebar2 = document.querySelector("#sidebar");  
console.log(sidebar);
console.log(sidebar2);

let items = document.getElementsByClassName("navegacion");
console.log(items[1]);
console.log(items.length);

let item = document.querySelector(".menu .navegacion");   
let items2 = document.querySelectorAll(".navegacion");  
console.log(item);
console.log(items2[0]);

const app = document.querySelector(".post-list"); 

const div = document.createElement("div");    // <div></div>
div.id = "page";                              // <div id="page"></div>
div.className = "data";                       // <div id="page" class="data"></div>
div.style = "color: white;font-weight: bold;background-color:red;"; 
div.textContent = "Div creado desde JS";    
//app.appendChild(div);

const div2 = document.createElement("div");    
div2.id = "page2";                            
div2.className = "data";                      
div2.style = "color: black;font-weight: bold;background-color:yellow;";  
div2.textContent = "Otro div creado desde JS";    

   

// Opción 1: <div>Ejemplo</div> <div id="app">App</div>
//app.insertAdjacentElement("beforebegin", div);

// Opción 2: <div id="app"> <div>Ejemplo</div> App</div>
//app.insertAdjacentElement("afterbegin", div2);


// Opción 3: <div id="app">App <div>Ejemplo</div> </div>
app.insertAdjacentElement("beforeend", div);


// Opción 4: <div id="app">App</div> <div>Ejemplo</div>
app.insertAdjacentElement("afterend", div2);