function mostrar()
{
	var notaRandom;

	notaRandom = Math.floor((Math.random() * 10) + 1);
	
	console.log(notaRandom); 

	if (notaRandom>8) //&& notaRandom<11) 
	{
		alert("EXCELENTE");
	}
	else
	{
		if (notaRandom<4) 
		{
			alert("Vamos, la proxima se puede")
		}
		else
		{
			alert("APROBÓ");
		}
	}
	

}//FIN DE LA FUNCIÓN