
function mostrar()
{
	var tipoDeProducto;
	var cantidadDeProducto;
	var cantidadDeBarbijos;
	var cantidadDeJabones;
	var cantidadDeAlcoholes;
	var marca;
	var fabricante;
	var PrecioBarbijoMasCaro;
	var precioBarbijoMasCaroCantidad;
	var precioBarbijoMasCaroFabricante;
	var itemMasUnidades;
	var itemMasUnidadesFabricante;
	var contador;
	var bandera;

	contador=0;
	bandera=0;
	cantidadDeJabones=0;
	itemMasUnidades=0;

	while(contador<5)
	{
		tipoDeProducto=prompt("Qué producto necesita?(barbijo/jabon/alcohol)");
		while(!isNaN(tipoDeProducto)||tipoDeProducto!="barbijo"&&tipoDeProducto!="jabon"&&tipoDeProducto!="alcohol")
		{
			tipoDeProducto=prompt("Producto invalido.");
		}
		precio=prompt("Indique el precio(Entre 100 y 300)");
		precio=parseInt(precio);
		while(isNaN(precio)|| precio<100 || precio>300)
		{
			precio=prompt("Precio invalido");
			precio=parseInt(precio);
		}
		cantidadDeProducto=prompt("Cúantas unidades requiere?(entre 1 y 1000)");
		cantidadDeProducto=parseInt(cantidadDeProducto);
		while(isNaN(cantidadDeProducto)||cantidadDeProducto<1||cantidadDeProducto>1000)
		{
			cantidadDeProducto=prompt("Cantidad invalida.");
			cantidadDeProducto=parseInt(cantidadDeProducto);
		}
		marca=prompt("Qué marca solicita?(A/B)");
		while(!isNaN(marca)||marca!="a" && marca!="b")
		{
			marca=prompt("Marca invalida.");
		}
		fabricante=prompt("Qué fabricante solicita?(lala ó lele)");
		while(!isNaN(fabricante)||fabricante!="lala" && fabricante!="lele")
		{
			fabricante=prompt("Fabricante invalido.");
		}

		if (tipoDeProducto=="barbijo" && bandera==0|| PrecioBarbijoMasCaro<precio)
		{
			PrecioBarbijoMasCaro=precio;
			//console.log(PrecioBarbijoMasCaro);
			precioBarbijoMasCaroFabricante=fabricante;
			//console.log(precioBarbijoMasCaroFabricante);
			precioBarbijoMasCaroCantidad=cantidadDeProducto;
			//console.log(precioBarbijoMasCaroCantidad);

			bandera=bandera+1;
		}
		if (contador==0)
		{
			itemMasUnidades=cantidadDeProducto;
		}
		else 
		{
			if (cantidadDeProducto>itemMasUnidades)
			{
				itemMasUnidades=tipoDeProducto;
				itemMasUnidadesFabricante=fabricante;
			}
		}	
		if (tipoDeProducto=="jabon")
		{
			cantidadDeJabones=cantidadDeJabones+cantidadDeProducto;
		}

		contador=contador+1
	}
	alert("los barbijos mas caros son del fabricante "+precioBarbijoMasCaroFabricante+" y hay un total de "+precioBarbijoMasCaroCantidad+" barbijos");
	console.log("el barbijo mas caro es del fabricante "+precioBarbijoMasCaroFabricante+" y hay un total de "+precioBarbijoMasCaroCantidad+" barbijos");
	alert("el item con mas unidades es "+itemMasUnidades+" del fabricante "+fabricante);
	console.log("el item con mas unidades es "+itemMasUnidades+" del fabricante "+fabricante);
	alert("Hay un total de "+cantidadDeJabones+" jabones.");
	console.log("Hay un total de "+cantidadDeJabones+" jabones.");
}
/*realizar 5 cargas de productos de prevencion de contagio.
validar los siguientes datos:
tipo(validar "barbijo", "jabon" y "alcohol").
precio(entre 100 y 300).
cantidad de unidades(mayor a 0 y menor a 1000).
marca.
fabricante.
Se debe informar lo siguiente:
A	Del mas caro de los barbijos, la cantidad de unidades y
el fabricante.
B	Del item con mas unidades, el fabricante.
C	Cuantas unidades de jabon hay en total.*/
