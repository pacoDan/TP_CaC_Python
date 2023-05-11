const {createApp} = Vue //Creamos un objeto de tipo Vue
createApp({
    data(){
        return {
            titulo: 'Directiva v-for',
            productos: ['Fideos', 'Azúcar', 'Harina'], //Array común
            productos2: [
                {nombre: 'Silla', cantidad: 10},
                {nombre: 'Mesa', cantidad: 1},
                {nombre: 'Cama', cantidad: 5},
                {nombre: 'Sillón', cantidad: 2}
            ] //Array de objetos
        }
    }
}).mount('#ejemplo')