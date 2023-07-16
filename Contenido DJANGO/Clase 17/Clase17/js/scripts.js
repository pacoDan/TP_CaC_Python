const divPage = document.getElementById("page");
console.log(divPage);


const elem = document.createElement("div"); // <div></div>
elem.id = "page"; // <div id="page"></div>
elem.className = "data"; // <div id="page" class="data"></div>
elem.style = "color: red"; //

const img = document.createElement("img");
img.src = "https://lenguajejs.com/assets/logo.svg";
img.alt = "Logo Javascript";
document.body.appendChild(img);