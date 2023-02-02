const ContDatos = document.querySelector(".contenedor-datos");/*estaria agregando en el div el elemento creado*/
const ContDatos1 = document.querySelector(".contenedor-datos1");
const ContDatos2 = document.querySelector(".contenedor-datos2");
const ContDatos3 = document.querySelector(".contenedor-datos3");
const ContDatos4 = document.querySelector(".contenedor-datos4");
const ContDatos5 = document.querySelector(".contenedor-datos5");
const ContDatos6 = document.querySelector(".contenedor-datos6");
const button = document.querySelector("button");

/*tomo los valores de los id del html*/
    let nombre =document.getElementById("nombre");
    let email =document.getElementById("email");
    let cumpleanos =document.getElementById("cumpleanos");
    let direccion =document.getElementById("direccion");
    let telefono =document.getElementById("telefono")
    let password =document.getElementById("password");
	let foto =document.getElementById("foto");
	
function traerDatos(){	
    fetch('https://randomuser.me/api/')
        
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
			email.addEventListener("click", mostrarEmail(data));	
			cumpleanos.addEventListener("click", mostrarCumpleanos(data));
			direccion.addEventListener("click", mostrarDireccion(data));
			telefono.addEventListener("click", mostrarTelefono(data)); 	
		password.addEventListener("click", mostrarPassword(data));
			foto.addEventListener("click",mostrarFoto(data));
		
			/*   */
        function mostrarNombre(data){
			
         /* console.log(data.results[0].name.first + " " + data.results[0].name.last);*/
            const h2 =document.createElement('h2');/*creo el elemento h2*/
            h2.textContent = data.results[0].name.first + " " + data.results[0].name.last/*asigno valor*/
			const div = document.createElement('div');//defino el div
            div.appendChild(h2);/*lo uno al DOM*/
            ContDatos.appendChild(div);/*en el div definido en htlm*/
			
		
			console.log('entre');
			/*document.getElementById("nombre").innerHTML = data.results[0].name.first+ " " + data.results[0].name.last*/
		
		}	
		/*                 */	
		function mostrarEmail(data){
			/*console.log(data);
            console.log('entre email');
            console.log(data.results[0].email);*/
			
            const h2 =document.createElement('h2');
            h2.textContent = data.results[0].email
            const div = document.createElement('div');
            div.appendChild(h2);
            ContDatos1.appendChild(div);              	
		}	
			/*    */
		function mostrarCumpleanos(data){
            
            const h2 =document.createElement('h2');
            h2.textContent = data.results[0].dob.age
            const div = document.createElement('div');
            div.appendChild(h2);
            ContDatos2.appendChild(div);
        }
		
		/*     */	
		function mostrarDireccion(data){
           /* console.log(data);
			/*console.log(data.results[0].location.street);*/
            const h2 =document.createElement('h2');
            h2.textContent = data.results[0].location.street.name+" "+data.results[0].location.street.number;
            const div = document.createElement('div');
            div.appendChild(h2);
            ContDatos3.appendChild(div);
        }	
			
		/*     */	
		function mostrarTelefono(data){
            
            const h2 =document.createElement('h2');
            h2.textContent = data.results[0].cell;
            const div = document.createElement('div');
            div.appendChild(h2);
            ContDatos4.appendChild(div);
        }
			
		/*    */	
        function mostrarPassword(data){
            
            const h3 =document.createElement('h3');
            h3.textContent = data.results[0].login.password;
            const div = document.createElement('div');
            div.appendChild(h3);
            ContDatos5.appendChild(div);
        }
       /*       */
		function mostrarFoto(data){
            
			/*console.log(data);
            console.log('entre foto');
            console.log(data.results[0].picture.medium);*/
			
            const img =document.createElement('img');
            img.src = data.results[0].picture.large;
            const div = document.createElement('div');
            div.appendChild(img);
            ContDatos6.appendChild(div);
        }	
    }
}
    
traerDatos();
