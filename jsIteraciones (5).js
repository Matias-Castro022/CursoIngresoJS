function mostrar()
{

	var sexo;

	sexo=prompt("ingrese f ó m .");

	while(sexo!="m" && sexo!="f")
	{
		sexo=prompt("sexo invalido. igrese f ó m .");
	}

 	if (sexo=="m")
 	{
 		document.getElementById('Sexo').value="masculino."
 	}
 	else
 	{
 		if (sexo=="f")
 		{
 			document.getElementById('Sexo').value="femenino."
 		}
 	}
	//document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN