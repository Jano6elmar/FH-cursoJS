


//formas de input/ingreso de info del usuario

alert('hola mundo') //instruccion bloqueante, no se ejecutan mas lineas hasta recibir input del usuario

let nombre = prompt('cual es tu nomrbe', 'sin nombre')
let nombre1 = prompt('cual es tu nomrbe?')
console.log(nombre)//valor sin algo/nulo
console.log('****' + nombre + '****') ; // ' ' cadena de carcateres

const seleccion = confirm('está seguro de borrar esto?');

console.log(seleccion);

//metodos que vienen en el objeto windows
//en otra instancia no funciona, que no sea navegador
 alert()
prompt()
confirm()

console.log(global)