console.log('entre');
const button = document.querySelector("button");
const ContDatos = document.querySelector(".contenedor-datos");/*estaria agregando en el div el elemento creado*/
/*const ContDatos1 = document.querySelector(".contenedor-datos1");
const ContDatos2 = document.querySelector(".contenedor-datos2");
const ContDatos3 = document.querySelector(".contenedor-datos3");
const ContDatos4 = document.querySelector(".contenedor-datos4");
const ContDatos5 = document.querySelector(".contenedor-datos5");
const ContDatos6 = document.querySelector(".contenedor-datos6");*/

/*tomo los valores de los id del html*/
    let nombre =document.getElementById("nombre");
   /* let email =document.getElementById("email");
    let cumpleanos =document.getElementById("cumpleanos");
    let direccion =document.getElementById("direccion");
    let telefono =document.getElementById("telefono")
    let password =document.getElementById("password");
	let foto =document.getElementById("foto");*/
	
function traerDatosM(){	
    fetch('https://randomuser.me/api/')
        console.log('entrefuncio');
        .then( response => response.json() )
        .then( data => mostrarData(data) )
        .catch( error => console.log(error) )

        const mostrarData = (data) => {
    /*  console.log(data)

        console.log(data.results[0].name.first + " " + data.results[0].name.last)*/
         /*console.log(data.results[0].name.last)
         console.log(data.results[0].email)
         console.log(data.results[0].dob.age)
         console.log(data.results[0].location.city)
          console.log(data.results[0].cell)
          console.log(data.results[0].login.password) 
		console.log(data.results[0].picture.medium)	*/
        
		
       nombre.addEventListener("click", mostrarNombre(data));
			/*email.addEventListener("click", mostrarEmail(data));	
			cumpleanos.addEventListener("click", mostrarCumpleanos(data));
			direccion.addEventListener("click", mostrarDireccion(data));
			telefono.addEventListener("click", mostrarTelefono(data)); 	
		password.addEventListener("click", mostrarPassword(data));
			foto.addEventListener("click",mostrarFoto(data));*/
		
			/*   */
        function mostrarNombre(data){
          console.log(data.results[0].name.first + " " + data.results[0].name.last);
           document.getElementById("nombre").innerHTML = data.results[0].name.first+ " " + data.results[0].name.last 					
			const h2 =document.createElement('h2');/*creo el elemento h2*/
            h2.textContent = data.results[0].name.first + " " + data.results[0].name.last/*asigno valor*/
			const div = document.createElement('div');//defino el div
            div.appendChild(h2);/*lo uno al DOM*/
            ContDatos.appendChild(div);/*en el div definido en htlm*/
			
			/*cambiar de valores*/
		
		}
		}
		}
		
    
traerDatosM();

/*document.getElementById("nombre").innerHTML = data.results[0].name.first+ " " + data.results[0].name.last 					*/