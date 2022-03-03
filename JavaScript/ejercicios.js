function Temperatura()
{
    var numero1 = parseFloat(document.getElementById('Temper').value);
    if (numero1<15 ) {
         resultado = "Frio";
    } 
    else if (numero1>15 || numero1<25) {
        resultado = "Templado";
    } 
     if (numero1>=26) {
        resultado = "Calor";
    } 
    document.getElementById('result').value = resultado
}
function factorial (){
    var factorial = 1;
 
        for (var i=1; i <= document.getElementById ('nume1').value; i++){
            factorial *= i;
        }
 
        
        document.getElementById ('texto').innerHTML=`El factorial de ${i-1} es ${factorial}`;
    }
function MostrarFecha()

	{
        
		let fecha= new Date();

		document.write(fecha);

		let hora= fecha.getHours();
		let min= fecha.getMinutes();
		let seg= fecha.getSeconds();

		console.log ("hora : "+hora)
		console.log ("minutos : "+min)
		console.log ("segundos : "+seg)

		let dia = fecha.getDate();
		let dia_sem = fecha.getDay();
		let mes =fecha.getMonth();
		let meses =['Enero','Febrero','Marzo','Abril','Mayo'];
		let semana =['Domingo','Lunes','Martes','Miercoles','Jueves'];
		let año = fecha.getFullYear();

		console.log ("dia : "+semana[dia_sem]);
		console.log ("dia : "+dia);
		console.log ("mes : "+meses[mes]);
		console.log ("año : "+año);

		let parrafo = document.getElementById("fecha1") 
		document.write('<hr>'+semana[dia_sem]+','+dia+' de '+meses[mes]+' del '+año+' y son las '+ hora +' con '+ min+' minutos' )
	}
