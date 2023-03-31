//una funcion sirve para centralizar
//la logica de un procedimiento que podemos
//ejecutar varias veces
function saludar() {
    console.log('Hola Mundo');
//el console log es un metodo
//una funcion que se encuentra dentro de un objeto
//una funcion a secas es algo que definimos nosotros
return 1; 
}

//llamada de la funcion para ejecutarla se ponen los ()
saludar();


//esto igual funciona poruqe la primera vez que lee
//js hace dos barridos pero la primera lee rapidamente
//todo el archivo, y saca las referencias de donde están
//las inicializaciones de variables y funciones
//pero es buena practica que las funciones o definiciones de
//de las mismas siempre esten al principio y abajo el llamado
// de las mismas porque si no
// queda un poco dificl saber donde es que se definió
//
saludar2();

function saludar2() {
    console.log('Hola Mundo desde saludar 2');
 
}


//otra manera de definir funciones
//funcion anonima, pero responde en este caso al nombre
// de la constante
const saludar3 = function () {
    console.log('Hola Mundo desde saludar 3');
}
saludar3()
//el beneficio es que como lo estoy asignando a una constante
//no hay manera de que esta funcion o en este caso este nombre
//pueda ser reutilizado en mi aplicacion
//es como una medida de seguridad pero es basicamente 
//lo mismo de arriba


//argumentos de las funciones
//a las funciones puedo pasarle variables que se mandan
//desde el momento en que se ejecuta
//mando la variable a la funcion y la funcion comprende
//y conoce el valor de dicha variable
//para eso son los argumentos
function saludar4( nombre) { //nombre es el id del argumento
    console.log('Hola '+ nombre );
 
}

const saludar5 = function (nombre) {
    console.log('Hola ' +nombre+ ' desde saludar 5');
}


saludar4( 'Kano' );
saludar5('Jano');


function saludar6( nombre) { //nombre es el id del argumento
    console.log(arguments)
    console.log('Hola '+ nombre );
 }
saludar6( 'Kano', 31, true, 'Chillan' );

 //todas las funciones tradicionales
//(las funciones de flecha no)
// o sea las que tienen la palabra explicita function
//internamente al ejecutarse tienen un objeto implicito
//llamado arguments 
//arguments no se define en este caso, en lugar alguno
//pero así usado dentro de una funcion a lo que hace 
//referencia es a todos los elementos que se encuentren
//enviados a la funcion...


//funciones de flecha o lambda functions
const saludarFlecha = () => {
        console.log('Hola Flecha')
}
//con argumentos, los parentesis son opcionales cuando
//mando un solo argumento, es recomendable usarlos si
const saludarFlecha2 =  nombre => {
    console.log('Hola ' + nombre)
}
//las funciones de flecha son mas eficientes que las 
//tradicionales y evitan problemas con el objeto this
// 


//retorno
//los mensajes que imprimimos en consola no son el
//retorno de las funciones 
// las funciones que tenemos definidas retornan undefined
//cada funcion en js, si no tiene la palabra reservada 
//return, entonces no regresa algo
//return indica que cuando se llega a ese punto
// va a retornar un valor o algo a la linea de codigo
//la cual fue quien la llamó 

/* 
function saludar() {
    console.log('Hola Mundo');
return 1; 
} */

//saludar() 
//al ejecutarse la funcion retornaría un 1
//por ej, guardemos el retorno en una constante

function saludarn() {
    console.log('Hola Mundo');
return 10; 
console.log('soy un codigo despues de return')
//despues de un return se sale de la funcion, no se ejecuta lo que viene despues

} 

const retornoDeSaludar = saludarn();
console.log(retornoDeSaludar)

//si necesito regresar dos valore como 1 y 2
// no pongo return 1,2
//sino return [1,2]

function saludarn1() {
    console.log('Hola Mundo');
return [1,2]; 
}
const retornoDeSaludar2 = saludarn1();

console.log(retornoDeSaludar2[0], retornoDeSaludar2[1]);

//ejercicios
function sumar(a, b) {
    return a + b;
}
//o
const sumar2 = (a,b) => {
    return a + b;
}
//lo anterior se puede escribir así porque solo se tiene una linea de contenido
const sumar3 = (a,b) => a+b

 
console.log( 'suma: ',sumar(1,2));
console.log( 'suma2: ',sumar2(1,22));
console.log( 'suma3: ',sumar3(2,2));


function getAleatorio() {
    return Math.random();
} 
//MAth propio de window//
//random da un numero aleatorio
console.log( 'numero aleatorio: ', getAleatorio())


//transformar en funcion de flecha, que no tenga llaves

const getAleatorio1 = () => Math.random();
console.log( 'numero aleatorio1: ', getAleatorio1())


