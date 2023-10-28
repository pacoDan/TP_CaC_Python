const getApi = `https://reqres.in/api/users/1`;
//Fetch API está basado en promesas

/********     GET: Pedimos información al servidor    **********/
//Se pasa la URL del servidor como parámetro
fetch(getApi)
    //El servidor devuelve un objeto Response (respuesta) con información
    //Pero hay que convertir a JSON la respuesta para poder acceder a dichos datos (res.json())
    .then(function(respuesta) {
        //Mostrar feedback sobre el estado de la operación
        console.warn(respuesta.ok ? "Operación realizada sin errores" : "Sucedió un problema");
        //Convertir el Response a JSON, posteriormente se procesan los datos para conseguir un objeto que se pueda manejar en JS.
        return respuesta.json();
    })
    .then(function(data) {
        //Los datos en formato JSON son pasados a string y posteriormente al formato objeto
        let user = JSON.parse(JSON.stringify(data));
        console.log(`${user.data.first_name} ${user.data.last_name} ${user.data.email}`);
    })
    //Si hay un error, se informa:
    .catch(function(error) {
        console.error(`Error: ${error.message}`);
    });

const objAMandar = {
    name: 'Usuario 5',
    job: 'Doctor'
};

/********     POST: Enviamos información al servidor    **********/
const options = {
    //Método HTTP
    method: 'POST',
    //Los headers transmiten información acerca del navegador del cliente, de la página solicitada, del servidor, etc.
    //En este caso informamos al servidor que se envian datos en formato JSON.
    headers: {
        'Content-Type': 'application/json',
    },
    //Datos a enviar al servidor
    body: JSON.stringify(objAMandar)
};



fetch('https://reqres.in/api/users', options)
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log("Error");
    });