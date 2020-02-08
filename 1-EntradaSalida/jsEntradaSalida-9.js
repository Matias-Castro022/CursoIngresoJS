/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var porcentaje;
	var valorPorcentaje;
	var resultado;

	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	console.log("sueldo es "+sueldo);

	/* metodo con prompt, para pedir el porcentaje.
	porcentaje=prompt("ingrese porcentaje");
	porcentaje=parseInt(porcentaje);
	console.log("el porcentaje es %"+porcentaje);*/

	porcentaje=10;

	valorPorcentaje=sueldo*porcentaje/100;
	console.log("el valor del porcentaje es "+valorPorcentaje);

	resultado=sueldo+valorPorcentaje;
	document.getElementById('resultado').value=resultado;
	console.log("el resultado es "+ resultado);


}
