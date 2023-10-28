let reloj = 0;
let frecuencia = 1000;
reloj = setInterval("actualiza()", frecuencia);

function actualiza() {
    let ahora = new Date();
    let fecha = `${ahora.getDate()} - ${ahora.getMonth()+1} - ${ahora.getFullYear()}`;
    let hora = `${ahora.getHours()}:${ahora.getMinutes()}.${ahora.getSeconds()}`;
    let texto = `Hoy es ${fecha} y son las ${hora} horas.`;
    let div = document.querySelector('#reloj');
    div.innerHTML = texto;
}