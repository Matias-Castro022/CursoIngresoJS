function mostrar()
{
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad==15) 
	{
		alert("niña bonita");
	}
	else
	{
		alert("no deberias estar aqui");
	}

}//FIN DE LA FUNCIÓN