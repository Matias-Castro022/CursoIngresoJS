/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;

	dividendo=document.getElementById('numeroDividendo').value;
	dividendo=parseInt(dividendo);
	console.log("el dividendo es "+dividendo);

	divisor=document.getElementById('numeroDivisor').value;
	divisor=parseInt(divisor);
	console.log("el dividendo es "+divisor);

	resto=(dividendo%divisor);
	console.log("el resto es "+resto);
	alert("el resto es "+resto);


}
