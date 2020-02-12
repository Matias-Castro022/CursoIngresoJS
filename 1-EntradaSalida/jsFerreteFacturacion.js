/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var resultadoDeLaSuma;

	primerPrecio=document.getElementById('PrecioUno').value;
	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=document.getElementById('PrecioDos').value;
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=document.getElementById('PrecioTres').value;
	tercerPrecio=parseInt(tercerPrecio);

	resultadoDeLaSuma=(primerPrecio+segundoPrecio+tercerPrecio);
	
	alert("el resultado de la suma es: "+resultadoDeLaSuma);
	console.log(resultadoDeLaSuma);



}
function Promedio () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var resultadoDelPromedio;

	primerPrecio=document.getElementById('PrecioUno').value;
	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=document.getElementById('PrecioDos').value;
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=document.getElementById('PrecioTres').value;
	tercerPrecio=parseInt(tercerPrecio);

	//resultadoDelPromedio=()
}
function PrecioFinal () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var iva;
	var valorDelIva;
	var resultadoDelPrecioFinal;

	primerPrecio=document.getElementById('PrecioUno').value;
	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=document.getElementById('PrecioDos').value;
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=document.getElementById('PrecioTres').value;
	tercerPrecio=parseInt(tercerPrecio);

	//resultadoDelPrecioFinal=()
}