/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var PrimerNumero;
	var SegundoNumero;
	var ResultadoDeLaSuma;

	PrimerNumero=document.getElementById('numeroUno').value;
	PrimerNumero=parseInt(PrimerNumero);

	SegundoNumero=document.getElementById('numeroDos').value;
	SegundoNumero=parseInt(SegundoNumero);
	
	ResultadoDeLaSuma=(PrimerNumero+SegundoNumero);
	console.log(ResultadoDeLaSuma);
	alert(ResultadoDeLaSuma);
}

function restar()
{
	var PrimerNumero;
	var SegundoNumero;
	var ResultadoDeLaResta;

	PrimerNumero=document.getElementById('numeroUno').value;
	PrimerNumero=parseInt(PrimerNumero);

	SegundoNumero=document.getElementById('numeroDos').value;
	SegundoNumero=parseInt(SegundoNumero);
	
	ResultadoDeLaResta=(PrimerNumero-SegundoNumero);
	console.log(ResultadoDeLaResta);
	alert(ResultadoDeLaResta);
}	

function multiplicar()
{ 
	var PrimerNumero;
	var SegundoNumero;
	var ResultadoDeLaMultiplicacion;

	PrimerNumero=document.getElementById('numeroUno').value;
	PrimerNumero=parseInt(PrimerNumero);

	SegundoNumero=document.getElementById('numeroDos').value;
	SegundoNumero=parseInt(SegundoNumero);
	
	ResultadoDeLaMultiplicacion=(PrimerNumero*SegundoNumero);
	console.log(ResultadoDeLaMultiplicacion);
	alert(ResultadoDeLaMultiplicacion);
}

function dividir()
{
	var PrimerNumero;
	var SegundoNumero;
	var ResultadoDeLaDivision;

	PrimerNumero=document.getElementById('numeroUno').value;
	PrimerNumero=parseInt(PrimerNumero);

	SegundoNumero=document.getElementById('numeroDos').value;
	SegundoNumero=parseInt(SegundoNumero);
	
	ResultadoDeLaDivision=(PrimerNumero/SegundoNumero);
	console.log(ResultadoDeLaDivision);
	alert(ResultadoDeLaDivision);
}

