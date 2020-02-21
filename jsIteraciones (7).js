function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngresado;

	while(respuesta=="si")
	{
		contador=contador+1;
		numeroIngresado=prompt("ingrese número");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado));
		{
			numeroIngresado=prompt("Reingrese número");
			numeroIngresado=parseInt(numeroIngresado);
		}
	}
		acumulador=acumulador+numeroIngresado;
		respuesta=prompt("ingrese si para continuar");



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN