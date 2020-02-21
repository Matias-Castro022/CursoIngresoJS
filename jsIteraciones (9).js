function mostrar()
{

	var contador;
	var maximo;
	var minimo;
	var numeroIngresado;
	var respuesta='si';

	contador=0;
	// declarar variables

	while(respuesta=='si')
	{
		contador=contador+1;
		numeroIngresado=prompt("ingrese número");
		numeroIngresado=parseInt(numeroIngresado);

		if (contador==1)
		{
			minimo=numeroIngresado
			maximo=numeroIngresado
		}
		else
		{
			if (numeroIngresado>maximo)
			{
				maximo=numeroIngresado;
			}
			else
			{
				minimo=numeroIngresado;
			}
		}
		respuesta=prompt("ingrese si para continuar.");
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN