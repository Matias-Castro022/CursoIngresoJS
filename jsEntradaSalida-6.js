/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var PrimerNumero;
	var SegundoNumero;
	var Suma;

	PrimerNumero=document.getElementById('numeroUno').value;
	console.log(PrimerNumero);
	PrimerNumero=parseInt(PrimerNumero);

	SegundoNumero=document.getElementById('numeroDos').value;
	console.log(SegundoNumero);
	SegundoNumero=parseInt(SegundoNumero);

	suma=(PrimerNumero+SegundoNumero);

	alert(Suma);
	/*el parseInt solo toma el primer numero ingresado y lo devuelve
	en valor literal.
	por ejemplo:
	PrimerNumero=parseInt(3qwe)
	solo me tomara el 3.

}

