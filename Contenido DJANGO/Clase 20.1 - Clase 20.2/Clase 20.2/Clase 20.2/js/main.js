const { createApp, computed } = Vue;

const templates = {
	home: `
        <div id="home" class="active">
            <h2 class='page-header'>Recetas</h2>
            <ul v-for="receta in recetas">
                <li><strong>Receta:</strong> {{receta.nombre}}
                    <br><img v-bind:src="receta.foto"><br>
                    <p><strong>Preparacion:</strong> {{receta.preparacion}}</p>
                    <p><strong>Ingredientes:</strong> {{receta.ingredientes}}</p>
                </li>
            </ul>
        </div>`,
	about: `
        <div id="about" class="container active">
            <h2 class='page-header'>Acerca De Nosotros</h2><br>
            <img v-bind:src="imagen">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
        </div>`,
	contact: `
        <div id="contact" class="container active">
            <h2 class='page-header'>Contacto</h2>
            <p>Envíame tus sugerencias de recetas a mi correo: <a :href='"mailto:"+mail'>{{mail}}</a></p>       
        </div>`,
	location: `
        <div id="location" class="container active">
            <h2 class='page-header'>Sucursales</h2>
            <table>
                <tr>
                    <th>Local</th>
                    <th>Direccion</th>
                    <th colspan='2'>Mapa</th>
                </tr>
                <tr v-for="elemento in locales">
                    <td>{{elemento.nombre}}</td>
                    <td>{{elemento.direccion}}</td>
                    <td><a v-bind:href="elemento.link"> </a></td>
                    <td><iframe id="mapasi" v-bind:src="elemento.iframe"  frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe><td>
                </tr>

            </table>
       </div>`,
	registration: `
        <div id="registration" class="container active">
            <div class="formulario">
                <h2 class='page-header'>Registrarse</h2>
                <form action="show_data.html" target="_blank">

                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="firstname" placeholder="Nombre"><br>
                    <label for="apodo">Apodo:</label>
                    <input type="text" id="apodo" name="nickname" placeholder="Apodo"><br>

                    <label >Apellido:</label>
                    <input type="text" id="apellido" name="lastname" placeholder="Apellido"><br>

                    <label for="direccion">Dirección:</label>
                    <input type="text" id="direccion" name="address" placeholder="Dirección"><br>

                    <label for="contrasena">Contraseña:</label>
                    <input type="password" name="password"><br>

                    <label for="mail">E-mail:</label>
                    <input type="email" name="email"><br>

                    <label for="Nacimiento">Fecha Nacimiento:</label>
                    <input type="date" id="start" name="birthday" min="1900-01-01" max="2020-12-31"><br>

                    <label for="cel">Celular:</label>
                    <input type="Celular" name="celular"><br>

                    <p>Comentarios:</p>
                    <textarea name="comentario"></textarea>

                    <input type="submit" value="Enviar">
                </form>
            </div>
        </div>`
};

const app = Vue.createApp({
	data(){
		return {
			view: "home"
		};
	},
	components: {
		home: {
			data(){
				return {
					recetas: [
						{
							nombre: "Wrap Doña Inés",
							ingredientes:"Jamón crudo, queso brie, rúcula, tomates confitados.",
							preparacion:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
							foto: "https://naturally-fresh.web.app/images/wraps/1.jpg",
						},
						{
							nombre: "Wrap vegetariano",
							ingredientes:"Jamón crudo, queso brie, rúcula, tomates confitados.",
							preparacion:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
							foto: "https://naturally-fresh.web.app/images/wraps/2.jpg",
						}
					]
				};
			},
			template: templates.home,
		},
		about: {
			data(){
				return {
					imagen: "https://gourmetdemexico.com.mx/wp-content/uploads/2018/03/descarga.jpg"
				};
			},
			template: templates.about,
		},
		contact: {
			data(){
				return {
					mail: "example@example.com"
				};
			},
			template: templates.contact,
		},
		location: {
			data(){
				return {
					locales: [
						{
							nombre: "Sucursal Once",
							direccion: "Rivadavia 150 - CABA",
							link: "https://www.google.com.ar/maps/place/Federico+Lacroze+2702,+B1703BDL+Jos%C3%A9+Ingenieros,+Provincia+de+Buenos+Aires/@-34.621942,-58.5354241,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcc81fc874d681:0x3f7ca31814a9bdf8!8m2!3d-34.621942!4d-58.53323",
							iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9409930954894!2d-58.40815704869058!3d-34.6056535803632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf2a00d73df%3A0xc90b4ce1a7523378!2sAv.%20Pueyrred%C3%B3n%20400%2C%20C1032ABQ%20CABA!5e0!3m2!1ses!2sar!4v1592865675943!5m2!1ses!2sar",
						},
						{
							nombre: "Sucursal Colegiales",
							direccion: "Federico Lacroze 2702 - CABA",
							link: "https://www.google.com.ar/maps/place/Federico+Lacroze+2702,+B1703BDL+Jos%C3%A9+Ingenieros,+Provincia+de+Buenos+Aires/@-34.621942,-58.5354241,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcc81fc874d681:0x3f7ca31814a9bdf8!8m2!3d-34.621942!4d-58.53323",
							iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9409930954894!2d-58.40815704869058!3d-34.6056535803632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf2a00d73df%3A0xc90b4ce1a7523378!2sAv.%20Pueyrred%C3%B3n%20400%2C%20C1032ABQ%20CABA!5e0!3m2!1ses!2sar!4v1592865675943!5m2!1ses!2sar",
						},
						{
							nombre: "Sucursal Chacarita",
							direccion: "Federico Lacroze 3800 - CABA",
							link: "https://www.google.com.ar/maps/place/Federico+Lacroze+2702,+B1703BDL+Jos%C3%A9+Ingenieros,+Provincia+de+Buenos+Aires/@-34.621942,-58.5354241,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcc81fc874d681:0x3f7ca31814a9bdf8!8m2!3d-34.621942!4d-58.53323",
							iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9409930954894!2d-58.40815704869058!3d-34.6056535803632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf2a00d73df%3A0xc90b4ce1a7523378!2sAv.%20Pueyrred%C3%B3n%20400%2C%20C1032ABQ%20CABA!5e0!3m2!1ses!2sar!4v1592865675943!5m2!1ses!2sar",
						}
					]
				};
			},
			template: templates.location,
		},
		registration: {
			template: templates.registration,
		}
	}
}).mount("#app");