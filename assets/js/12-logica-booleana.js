

const regresaTrue = () => {
    console.log('Regresa True');
    return true;
} 

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}


console.warn('Not o Negación: !');
console.log(true);//true 
console.log(!true);//false 
console.log(!false);//true 

console.log(!regresaFalse());//true 

console.warn('And'); //true si todos los valores son verdaderos
console.log( true && true ); //true
console.log( true && false ); //false
console.log( true && !false );//true


console.log('=========')
//si el primero es falso ignora las siguientes proposiciones
console.log( regresaFalse() && regresaTrue() )//false
console.log( regresaTrue()  && regresaFalse() ) //false

regresaTrue()  && regresaFalse()

console.log('====&&=====')
regresaFalse() && regresaTrue()

//mas de una condicion
console.log( '4 condiciones', true && true && true && false ); //false


console.warn('OR')//una de las dos tiene que ser true y el resultado es tru
console.log( true || false );
console.log( false || false );

//no se ejecuta el segundo porque el primero ya es true
console.log( regresaTrue()  || regresaFalse() )
console.log( '4 condiciones', true || true || true || false ); //false

//protips
console.warn('Asignaciones')

const soyUndefined = undefined;
const soyNull      = null;
const soyFalso     = false;
 
const a1 = true && 'Hola Mundo' && 150; //?
//se le asigna el ultimo valor a la variable
const a2 = false && 'Hola Mundo' && 150; //?
//otro ej//hay almenos un false con &&
const a3 = 'Hola' && 'Mundo' &  soyFalso ; 
//
const a4 = soyFalso || soyUndefined || soyNull || 'ya no soy falso'
//
const a5 = soyFalso || soyUndefined || regresaTrue() || 'ya no soy falso'
console.log({a1,a2, a3, a4, a5});

//la mayor parte de los usos

if( true || true || true || false) {
    console.log('hacer algo')
}else {
    //esto está sombreado porque jamas se va a ejecutar
    //porque arriba no deberia haber mas de 3 condiciones
    console.log('hacer otra cosa');
}































