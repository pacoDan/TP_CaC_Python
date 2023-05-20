var ñlistasDeUsuarios=[{}]
const app = Vue.createApp({
    data() {
        return {
            title: 'Ingresar a pedidos',
            username: '',
            password: '',
            loginSuccess: false,
            loginError: false
        };
    },
    created() {
        fetch('https://raw.githubusercontent.com/pacodan/restaurant/main/datos/login.json')
            .then(response => response.json())
            .then(data => {
                this.users = data;
            })
            .catch(error => {
                console.error('Error al obtener la lista de usuarios', error);
            });
    },
    methods: {
        login() {
            const user = this.users.find(user => user.username === this.username);
            if (user && user.password === this.password) {
                this.loginSuccess = true;
                this.loginError = false;
            } else {
                this.loginSuccess = false;
                this.loginError = true;
            }
        }
    }
});
app.mount('#app');