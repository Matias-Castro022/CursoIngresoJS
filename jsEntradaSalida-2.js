/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;

	nombre=prompt("Ingrese su nombre por favor");
	alert(nombre);
	/*usar alert es para informar al usuario y
	al programador en su lugar se utiliza el comando:
	console.log, hace que los datos ingresados
	en el prompt, aparezcan solo en la consola de
	desarrolladores*/
	console.log("su nombre es "+ nombre);
	/*al igual que el alert falla si se intenta 
	correr alguna variable no programda*/
}

