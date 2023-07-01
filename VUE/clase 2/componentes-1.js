//********************************** Ejemplo 1 **********************************
//Componentes 1 y 2
const CustomComponent1 = {
    template: `<div>
                  <h1>Componentes en VUE</h1>
              </div>` //template es el contenido HTML que tendrá mi componente
}
const CustomComponent2 = {
    template: `<p>Los <span class="resaltado">componentes </span> son una de las características importantes de Vue.JS que ayudan a crear elementos personalizados, que se pueden reutilizar en HTML.</p>
    <p> Dentro del componente se agrega un template el cual tiene asignado código
    HTML. Esta es la manera de registrar globalmente un componente en Vue.JS,
    que puede ser reutilizado en cualquier instancia Vue. El nombre asignado a
    las etiquetas será reemplazado por el código del <span class="resaltado">template</span> escrito en la creación del componente. </p>` //template es el contenido HTML que tendrá mi componente
}
//Objeto VUE
const ej1 = Vue.createApp({
    components: {
        'componente-1': CustomComponent1, //Vinculo el objeto VUE con el componente1
        'componente-2': CustomComponent2 //Vinculo el objeto VUE con el componente2
    }
}).mount("#ejemplo1")

//********************************** Ejemplo 2 **********************************
//Componente 3
const CustomComponent3 = {
    template:   `<div>
                    <h2>{{titulo}}</h2>
                    <p> Estamos en el curso {{ curso }} con la comisión {{ comision }} </p>
                </div>`,
    data() {
        return {
            'titulo': "Componente Personalizado con datos del objeto",
            'curso': "Full Stack Python",
            'comision': 12345
        }
    }
}
//Objeto VUE
const ej2 = Vue.createApp({
    components: {
        'componente-3': CustomComponent3
    }
}).mount("#ejemplo2")

//********************************** Ejemplo 3 **********************************
//Componente 4
const CustomComponent4 = {
    template: `<div 
                v-on:mouseover = "cambiarNombre();"
                v-on:mouseout = "reestablecerNombre();">
                <h1>Componente creado por {{nombre}}</span></h1>
                </div>`,
    data(){
        return{
            nombre: "Juan"
        }
    },
    methods: {
        cambiarNombre() {
            this.nombre = "Martín"
        },
        reestablecerNombre() {
            this.nombre = "Juan"
        }
    }
}
//Objeto VUE
const ej3 = Vue.createApp({
    components: {
        'componente-4': CustomComponent4
    }
}).mount("#ejemplo3")

