function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	var respuesta='si';

	while(respuesta=="si")
	{
		contador=contador+1;
		numeroIngresado=prompt("ingrese número");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado));
			{
				if (numeroIngresado>0)
				{
					positivo=positivo+numeroIngresado;
				}
				else
				{
					if (numeroIngresado<0)
					{
						negativo=negativo*numeroIngresado;
					}
				}
			}

		respuesta=prompt("ingrese si para continuar");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN