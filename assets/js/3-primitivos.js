
let nombre = 'alejandro belmar'//inicializando una variable

console.log( 'nombre:',nombre );

 nombre = 'jota chavez';//reinicializando la variable
console.log( 'nombre:',nombre );

nombre = "tia juanita";
nombre = `tia juanita`;
//la difernecia entre las comillas
//es de preferencia
//la comilla sencilla es menos pesadad solamente

//si quiero saber que 
//tipo de dato es el valor 
//al que apunta una variable
console.log( 'tipo de nombre:', typeof nombre); //operador interno de JS
//JS infiere automaticamnete  el tipo
//si le asigno otra cosa por ejemplo
nombre = 123
console.log( 'tipo de nombre:', typeof nombre );
// el tipo ya mutó y cambió
//esta caracteristica es eso que se dice de que 
//es debilmente tipado

//BOOLEANOS
let esMarvel = true;//false//solo se escribe ccon mayuscual
console.log( 'tipo de esMarvel: ',typeof esMarvel);


let edad = 33.001;//tambien es numero
console.log( 'tipo de edad: ',typeof edad);


let superPower  
console.log( 'tipode superPower: ', typeof superPower)
//undefined, debo interpreta que superPower no tiene 
//valor algun, no se ha inicializado con valor alguno aun

let soyNull = null; //object
console.log( 'tipo de soyNull: ', typeof soyNull)
//objet, el null se considera un objeto no un primitivo
//

//symbol//uso identificar propiedades de manera unica
 let symbol1 = Symbol( 'a' ); 
 let symbol2 = Symbol( 'a' ); 
//los simbolos permiten crear id unicos a js
//que tipo de dato es simbol1?  
 console.log( 'tipo de simbol1: ',typeof symbol1 );
 //es de tipo symbol

 //aunque tenemos que los simbol 1 y 2 se crean exactamente
 //iguales podemos hacer
 //ej
 //comprobación 
 console.log('comprobacion de igualdad: ', symbol1 === symbol2) 
 //exactamente igual
//esta comprobacion daria igual si ambos valores 
//fueran exactamente iguales tendriamos un true

//pero da false, son diferentes, ya veremos mas al respecto
//recordar 
//js infiere dependiendo del valor que se le asigne a dicha variable




