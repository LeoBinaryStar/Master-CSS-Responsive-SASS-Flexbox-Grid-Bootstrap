alert("Hola mundo")

var nombre = "Leo";
var altura = 180;

var concatenacion = nombre + " " + altura;
/*
var datos = document.getElementById("datos");

datos.innerHTML = 
	'<h1>Soy la caja de datos</h1> <h2>Mi nombre es: ${nombre}<h2><h3>Mido: ${altura} cm</h3>';

	if(altura >= 190){
		datos.innerHTML += '<h1>Eres alto</h1>'
	}else{
		datos.innerHTML += '<h1>Eres bajito</h1>'
	}

	for(var i=2000; i<=2020; i++){
		datos.innerHTML += "<h>Estamos en el año: "+i;
	}
	*/

	function MuestraNombre(nombre, altura) {
  var datos = document.getElementById("datos");

  datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
  `;
}

MuestraNombre(nombre, altura);

var nombres = ["Belen",  "Reynaldo", "Leonardo"]
/*
for(i = 0; i<nombres.length; i++){
	document.write(nombres[i] + `<br>`)
}
*/

nombres.forEach(function(nombre){
	document.write(nombre + `<br>`)
})