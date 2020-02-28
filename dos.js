/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/
function mostrar()
{
	var huesped;
  	var cantidadPersonas;
  	var maximoPersonas;
  	var minimoPersonas;
	var dias;
	var masDias;
	var medioDePago;
	var medioMasUsado;
	var respuesta;
	var contador;

	contador=0;
	respuesta='si';

  	while(respuesta=="si")
  	{
  		contador=contador+1;

  		huesped=prompt("Ingrese su nombre.");
  		cantidadPersonas=prompt("Ingrese número de alojantes");
  		cantidadPersonas=parseInt(cantidadPersonas);
  		dias=prompt("Ingrese el número de dias que desea alojarse");
  		dias=parseInt(dias);
  		medioDePago=prompt("Ingrese su medio de pago(Efectivo/Tarjeta/QR)");

  		while(!isNaN(huesped))
  		{
  			huesped=prompt("Nombre invalido");
  		}
 		while(isNaN(cantidadPersonas))
 		{
 			cantidadPersonas=prompt("número invalido.");
 			cantidadPersonas=parseInt(cantidadPersonas);
 		}
 		while(isNaN(dias))
 		{
 			dias=prompt("cantidad de días invalido.");
 			dias=parseInt(dias);
 		}
 		while(medioDePago!="efectivo" && medioDePago!="tarjeta" && medioDePago!="qr")
 		{
 			medioDePago=prompt("Medio de pago invalido");
 		}

 		respuesta=prompt("Desea agregar a un nuevo huesped.");

 		if (contador==1)
 		{
 			minimoPersonas=cantidadPersonas;
 			maximoPersonas=cantidadPersonas;
 		}
 		else
 		{
 			if (cantidadPersonas>maximoPersonas)
 			{
 				maximoPersonas=cantidadPersonas;
 			}
 			else
 			{
 				/*if (cantidadPersonas<minimoPersonas)
 				{*/
 				minimoPersonas=cantidadPersonas;
 				//}
 			}
 		}

 		
 		
 	}

 	
 	//console.log(huesped+" trajo un total de "+maximoPersonas+" personas");
  	

	document.write( <br>);
	document.write( <br>);
	document.write( <br>);
	document.write( <br>);
}	
