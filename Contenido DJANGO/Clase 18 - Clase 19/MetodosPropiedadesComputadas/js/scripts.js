const { createApp, computed} = Vue;

const ejemplo1 = Vue.createApp({
    data(){
        return{
            contador: 0,
            contador2: 0
        }
    },
    computed: {
        output() {
            console.log("Computed");
            return this.contador2 > 5 ? 'Mayor a 5' : 'Menor a 5';
        }
    },
    methods: {
        resultado() {
            console.log("Method");
            return this.contador > 5 ? 'Mayor a 5' : 'Menor a 5';
        }
    }
}).mount("#ejemplo1");