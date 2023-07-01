const {createApp} = Vue //Creamos un objeto de tipo Vue
createApp({
    data(){
        return {
            mensaje: 'Hola alumnos de la Comisión',
            comision: 23016,
            curso: 'Codo a Codo',
            profesor: 'Juan Pablo',
            descripcion: 'Vue.js es un framework! (agregado desde v-text!)',
            subtitulo: '<h2>Este es un subtítulo agregado con <span class="naranja">v-html</span></h2>',
            foto: 'img/logoVue.png',
            tamanio: 50,
            url: 'https://www.google.com.ar/',
            claseCSS: 'enlace',
            oculto: true, //true lo muestra, false lo oculta
            otro_titulo: 'Soy otro titulo'
        }
    }
}).mount('#app')