alert('Bienvenido al restaurante. Esta es tu cuenta')
//Ingresar datos

var entrada = parseInt(prompt('Ingrse el costo de entrada'))
var principal = parseInt(prompt('Ingrse el costo del plato principal'))
var postre = parseInt(prompt('Ingrse el costo del postre'))

//Procedimientos 
var suma = entrada + principal + postre;
var igv = (suma*0,18)+suma


//Mostrar Datos
console.log('El costo de entrada es: ' + entrada);
console.log('El costo del plato principal ' + principal);
console.log('El costo del postre ' + postre);
console.log('El costo total es: ' + suma);
console.log('El costo total con IGV es: ' + igv);