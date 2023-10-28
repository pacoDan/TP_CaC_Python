descargarUsuarios(10);

function descargarUsuarios(cantidad) {        //US
    const api = `https://api.randomuser.me/?nat=US&results=${cantidad}`;
    fetch(api)
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(datos) {
            imprimirHTML(datos.results);
        })
        .catch(function(error) {
            console.log(`Error: ${error.message}`);
        });
}

function imprimirHTML(datos) {
    datos.forEach(function(usuario) {
        console.log(usuario);
        const li = document.createElement('li');
        const obj = {};
        obj.nombre = usuario.name.first;
        obj.apellido = usuario.name.last;
        obj.imagen = usuario.picture.large;
        obj.nacionalidad = usuario.nat;
        obj.password = usuario.login.password;

        li.innerHTML = `
            Nombre: ${obj.nombre} ${obj.apellido}
            País: ${obj.nacionalidad}
            Pass: ${obj.password}
            Imagen: <img src="${obj.imagen}">
        `;
        document.querySelector('#app').appendChild(li);
    })
}