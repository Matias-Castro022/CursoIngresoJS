function mostrar()
{
	var tipoDeIngrediente;
	var cantidadKilos;
	var kilosVegetal;
	var kilosAnimal;
	var kilosMixtos;
	var pesoTotal;
	var precioPorKilo;
	var descuento;
	var precioBruto;
	var precioNeto;
	var tipoDeIngredienteMasCaro;
	var precioPorKiloTotal;
	var promedioPrecioPorKilo;
	var contador;
	var respuesta;

	contador=0;
	respuesta="si";
	bandera=0;
	pesoTotal=0;
	descuento=0;
	precioPorKiloTotal=0;

	while(respuesta=="si")
	{
		tipoDeIngrediente=prompt("Qué tipo de ingrediente lleva?(vegetal; animal; mixto)");
		while(!isNaN(tipoDeIngrediente)||tipoDeIngrediente!="vegetal" && tipoDeIngrediente!="animal" && tipoDeIngrediente!="mixto")
		{
			tipoDeIngrediente=prompt("Tipo de ingrediente invalido");
		}
		cantidadKilos=prompt("Cúantos kilos lleva?(entre 10 y 1000)");
		cantidadKilos=parseInt(cantidadKilos);
		while(isNaN(cantidadKilos)||cantidadKilos<10||cantidadKilos>1000)
		{
			cantidadKilos=prompt("Cantidad invalida.");
			cantidadKilos=parseInt(cantidadKilos);
		}
		precioPorKilo=prompt("Ingrese el precio por kilo.");
		precioPorKilo=parseInt(precioPorKilo);
		while(isNaN(precioPorKilo)||precioPorKilo<1)
		{
			precioPorKilo=prompt("Precio invalido.");
			precioPorKilo=parseInt(precioPorKilo);
		}
		precioBruto=pesoTotal*precioPorKilo;
		console.log("El precio bruto es de "+precioBruto);
		pesoTotal=pesoTotal+cantidadKilos;
		precioPorKiloTotal=precioPorKiloTotal+precioPorKilo;
		
		contador=contador+1;
		respuesta=prompt("Desea realizar otra compra?");
	}
	if (pesoTotal>99)
	{
		descuento=15;
	}
	if (pesoTotal>299)
	{
		descuento=25;
	}
	
	precioNeto=precioBruto-precioBruto*descuento/100;
	console.log("El precio neto es de "+precioNeto);

	promedioPrecioPorKilo=precioPorKiloTotal/contador;
	console.log("el promedio de precio por kilo es de "+promedioPrecioPorKilo);
}
/*compra de ingredientes por mayor, hasta que el cliente quiera.
tipo("v"; "a"; "m")(vegetal; animal; mixto).
peso(entre 10 y 1000).
precio por kilo(mayor a 0).
si se compra mas de 100 kilos tiene un 15% de descuento.
si se compra mas de 300 kilos tiene un 25% de descuento.
a	importe total a pagar.
b	importe con descuento.
c	el tipo de alimento mas caro.
d	el promedio de precio por kilo en total.*/