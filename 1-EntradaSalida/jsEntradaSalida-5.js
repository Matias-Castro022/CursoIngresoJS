/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;

	nombre=document.getElementById('elNombre').value;
	console.log(nombre);

	edad=document.getElementById('laEdad').value;
	console.log(edad);

	alert("Usted se llama "+nombre+" y tiene "+edad+ " años");
	console.log("Usted se llama "+nombre+" y tiene "+edad+ " años");

}

