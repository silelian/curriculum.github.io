const info = document.querySelector('.informacion');

function mostrarDatos(){
	fetch('https://randomuser.me/api/')
	.then(res =>res.json())
	.then(data => {
		console.log(data)	
		const img = document.createElement('img');
	/*img.src = data.picture.large*/
	
	const h3 =document.createElement('h3');
/*h3.textContent = data.name.first*/
	
		const h2 =document.createElement('h2');
	/*h2.textContent = data.name.last*/
	
	const div = document.createElement('div');
/*	div.appendChild(img);
	div.append(h3);*/
	
	info.appendChild(div);
	
		
		/*crearInfo(data);*/
	});
}
	
/*function crearInfo(persona){
	const img = document.createElement('img');
	img.src = persona.picture.large
	
	const h3 =document.createElement('h3');
	h3.textContent = persona.name.first
	const h2 =document.createElement('h2');
	h2.textContent = persona.name.last
	
	const div = document.createElement('div');
	div.appendChild(img);
	div.append(h3);
	
	info.appendChild(div);
	
}*/
mostrarDatos();