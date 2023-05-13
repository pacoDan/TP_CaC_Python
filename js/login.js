var datos_login="https://raw.githubusercontent.com/pacodan/restaurant/main/datos/login.json"
new Vue({
    el: "#app",
    data: {
        title: "Ingresar a pedidos",
        username: "",
        password: "",
        loginSuccess: false, // Estado de inicio de sesión exitoso
        loginError: false, // Estado de inicio de sesión fallido
        users: [] // Lista de usuarios obtenida del archivo JSON
    },
    created() {
        // Realizar la llamada GET para obtener la lista de usuarios
        fetch(datos_login)
            .then((response) => response.json())
            .then((data) => {
                this.users = data;
            })
            .catch((error) => {
                console.error("Error al obtener la lista de usuarios", error);
            });
    },
    methods: {
        login() {
            const user = this.users.find((user) => user.username === this.username);
            if (user && user.password === this.password) {
                // Usuario autenticado correctamente
                this.loginSuccess = true;
                this.loginError = false;
            } else {
                // Credenciales inválidas
                this.loginSuccess = false;
                this.loginError = true;
            }
        },
    },
});



// new Vue({
//     el: '#app',
//     data: {
//       title: 'Ingresar a pedidos',
//       username: '',
//       password: '',
//       loginSuccess: false, // Estado de inicio de sesión exitoso
//       loginError: false // Estado de inicio de sesión fallido
//     },
//     created() {
//       // Realizar la llamada GET para obtener la lista de usuarios
//       fetch('https://raw.githubusercontent.com/pacodan/restaurant/main/datos/login.json')
//         .then(response => response.json())
//         .then(data => {
//           this.users = data;
//         })
//         .catch(error => {
//           console.error('Error al obtener la lista de usuarios', error);
//         });
//     },
//     methods: {
//       login() {
//         const user = this.users.find(user => user.username === this.username);
//         if (user && user.password === this.password) {
//           // Usuario autenticado correctamente
//           this.loginSuccess = true;
//           this.loginError = false;
//         } else {
//           // Credenciales inválidas
//           this.loginSuccess = false;
//           this.loginError = true;
//         }
//       }
//     }
//   });