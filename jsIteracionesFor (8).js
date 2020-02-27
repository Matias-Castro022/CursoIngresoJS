function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;
	var flag;

	numeroIngresado=prompt("ingrese numero");
	flag=0;

	for (numeroAnterior=2;numeroAnterior<numeroIngresado;numeroAnterior=numeroAnterior+1);
	{
		if(numeroIngresado%numeroAnterior==0)
		{
			flag=1;
			break;
		}	
	}

	if(flag!=1)
	{
		alert("el "+numeroIngresado+" es primo");	
	}
	alert("el "+numeroIngresado+" no es primo");



}//FIN DE LA FUNCIÓN