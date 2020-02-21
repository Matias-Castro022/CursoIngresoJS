function mostrar()
{

	var contador;
	var acumulador;
	var numeroIngresado;


	contador=0;
	acumulador=0;

	while(contador<5)
	{
		contador=contador+1;
		numeroIngresado=prompt("ingrese número");
		numeroIngresado=parseInt(numeroIngresado);

		acumulador=acumulador+numeroIngresado;

	}





	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
/*
			multiplo=multiplo+numeroIngresado

			para concatenar se invierte multiplo por numeroIngresado
			ej:
				numeroIngresado+multiplo;
		*/
