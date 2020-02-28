
function mostrar()
{
	var nombre;
	var edad;
	var menores;
	var adolecentes;
	var adultos;
	var terciarios;
	var sexo;
	var hombres;
	var mujeres;
	var temperatura;
	var contador;
	var acumulador;
	var respuesta;

	nombre=prompt("ingrese nombre.");
	edad=prompt	("ingrese edad.");
	edad=parseInt(edad);
	sexo=prompt("ingrese f ó m.");
	temperatura=prompt("ingrese temperatura.");
	temperatura=parseInt(temperatura);

	menores=0
	adolecentes=0
	mayores=0
	terciarios=0
	hombres=0;
	mujeres=0;
	contador=0;
	acumulador=0;
	respuesta='si';
	
	while(respuesta=="si")
	{
		contador=contador+1;
		edad=prompt	("ingrese edad.");
		while(isNaN(edad) || (edad<0 && edad>110))
		{
			edad=prompt("Edad incorrecta. reingrese edad.");
			edad=parseInt(edad);
			if(edad>0 && edad<13)
			{
				menores=menores+1;
			}
			else
			{
				if (edad>12 && edad<18)
				{
					adolecentes=adolecentes+1;
				}
				else
				{
					if(edad>17 && edad<61)
					{
						mayores=mayores+1;
					}
					else
					{
						terciarios=terciarios+1;
					}
				}	
			}
		}
		while(sexo!="f" || sexo!="m")
		{
			sexo=prompt("sexo invalido. reingrese.");
			if (sexo=="f")
			{
				mujeres=mujeres+1;
			}
			else
			{
				hombres=hombres+1;
			}
		}
		while(temperatura<29 || temperatura>42)
		{
			temperatura=prompt("estas en riesgo o reingrese	temperatura.");
			temperatura=parseInt(temperatura);
		}
		respuesta=prompt("ingrese si para continuar.");
	}
		/*if()
		{

		}*/

}
