

const regresaTrue = () => {
    console.log('regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('regresa false');
    return false;
}

console.warn( 'not o la negacion');
console.log( true ); 
console.log( 'negacion true',!true );
console.log( 'negacion false', !false ); 


console.log( !regresaFalse() ) //true


console.warn('And');
console.log(true && true);//true
console.log(true && !false);//true

console.log('=======');
console.log(regresaFalse() && regresaTrue()); // false porque la primera es false, ignora lo demas

console.log(regresaTrue() && regresaFalse()); // false


console.log('===== && =====')
regresaFalse() && regresaTrue()

console.log('4 consiciones &&:', true && true && true && false);

console.log('OR')//true
console.log( true || false );
console.log( false || false );

console.log(regresaTrue() || regresaFalse());

console.log('4 consiciones ||:', true || true ||true || false);



console.warn('asignaciones');

const soyUndefined = undefined;
const soyNull      = null;
const soyFalso     = false;


const a1 = true && 'hola mundo' && 150;
const a2 = false && 'hola mundo' && 150;
const a3 = 'HOla ' &&  'Mundo'&& soyFalso && true;
const a4 = soyFalso || 'ya no soy falso';
const a5 = soyFalso || soyUndefined || soyNull || 'ya o soy falso de nuevo' || true 
const a6 = soyFalso || soyUndefined || regresaTrue() || 'ya o soy falso de nuevo' || true 


console.log({a1, a2, a3, a4, a5, a6 })



if(true || true ||true || false) {
    console.log('hacer largo');
}else {
    console.log('hacer otra cosa')
}
























