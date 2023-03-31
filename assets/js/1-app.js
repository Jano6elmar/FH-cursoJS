// console.log(console.log('Hola Mundo!'));
//alert("hola desde app") //instruccion es bloqueante
//hasta que reciba input del usuario no sigue avanzando



let a = 10, 
    r = 11, 
    b = 20, 
    c = 'hola ',  
    d = 'Jan',  
    x = c + d; 
const saludo = c + d;
//c =1 no se puede hacers


//console.log()
//console.warn()
//console.error()

console.log('a',a );
console.log( 'b',b );
console.log( 'c',c );
console.log( 'x', x );

//lo siguiente da esto en la consola:
/*  {a: 10}
    {b: 20}
    {c: 30}
    {x: 40} */
    //enmarcar entre llaves
console.log('%c Mis variables' , 'color:blue; font-weight:bold'); //esto es css
console.log({a});
console.log({b});
console.log({c});
console.log({x});

c = 'hola de nuevo'

//puede recibir arreglos
 console.table({a, b, c, d, x}) 

/* let y const no sobre escriben las variables del pbjeto 
global window o donde sea que se corre JS */
let outerWidth = 1000000;
const outerHeight = 699;

let miNuevoNombre = "Jan Belmar"
/* var solo usar para aumentar compatibilidad con 
navegadores viejos */