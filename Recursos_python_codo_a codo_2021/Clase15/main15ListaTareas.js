new Vue({
    el:"#formVue",
    data:{
        tareas:[],
        nuevaTarea:"",
    },
    methods: {
        guardarTarea(){
            this.tareas.push(this.nuevaTarea),
            this.nuevaTarea=""
        }
    },
})