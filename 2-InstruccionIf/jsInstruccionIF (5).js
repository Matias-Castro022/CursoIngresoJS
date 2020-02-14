function mostrar()
{
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	//tomo la edad  

	if (edad>13) 
	{
		alert("no sos un adolecente");
	}
	else
	{
		if (edad<17)
		{
			alert("no sos adolecente");
		}
	}
}//FIN DE LA FUNCIÓN