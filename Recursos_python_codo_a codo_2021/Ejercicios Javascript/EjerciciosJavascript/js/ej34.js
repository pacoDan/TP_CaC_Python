const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let fecha = new Date();
let dia = dias[fecha.getDay()];
let mes = meses[fecha.getMonth()];

document.write(`Hoy es ${dia}, ${fecha.getDate()} de ${mes} de ${fecha.getFullYear()}
                y son las ${fecha.getHours()}:${fecha.getMinutes()} horas.`);