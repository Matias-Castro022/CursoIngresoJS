/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var valorPorcentaje;
	var resultado;

	importe=document.getElementById('importe').value;
	importe=parseInt(importe);
	console.log("el importe es "+importe);

	/* metodo con prompt, para pedir el porcentaje.
	porcentaje=prompt("ingrese porcentaje");
	porcentaje=parseInt(porcentaje);
	console.log("el porcentaje es %"+porcentaje);*/

	porcentaje=25;

	valorPorcentaje=importe*porcentaje/100;
	valorPorcentaje=parseInt(valorPorcentaje);
	console.log("el valor del porcentaje es: "+valorPorcentaje);

	resultado=importe-valorPorcentaje;
	document.getElementById('resultado').value=resultado;
	
}
