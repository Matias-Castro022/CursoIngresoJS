function mostrar()
{
	var nombre;
	var edad;
	var menores;
	var adolecentes
	var mayores;
	var sexo;
	var masculinos;
	var femeninos
	var notaFinal;
	var contadorMayores;
	var contadorAdolecentes;
	var contadorMenores;

	do
	{
		edad=prompt("ingrese edad");
		edad=parseInt(edad);		
	}while(edad<0 || edad>110);

	do
	{
		sexo=prompt("ingrese f ó m.");
	}while(sexo!= "f" || sexo!="m");


	if (edad>17)
	{
		contadorMayores=contadorMayores+1;
	}
	else
	{
		if (edad<13)
		{
			contadorMenores=contadorMenores+1
		}
		else
		{
			contadorAdolecentes=contadorAdolecentes+1
		}
	}

/*	while(sexo!="m" && sexo!="f")
	{
		sexo=prompt("sexo invalido. igrese f ó m .");
	}

 	if (sexo=="m")
 	{
 		sexo="masculino"
 	}
 	else
 	{
 		if (sexo=="f")
 		{
 			sexo="femenino."
 		}
 	}*/

}
	//document.write("texto de prueba <br>")
	/*
		do
		{
			edad=prompt("ingrese edad");
			edad=parseInt(edad);

		}while(edad)
	*/