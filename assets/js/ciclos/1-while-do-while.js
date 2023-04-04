



const autos = ['Ford', 'Mazda', 'Honda', 'Toyota'];

//variable de control
let i = 0; 
/* while( i < autos.length  ) {
    console.log( autos[i] )
    i = i + 1; // esto es lo mismo que i++
} */
 

console.warn(' while')
//son consideradas condiciones falsas
// undefined
// null
// false
//por ejemplo  console.log( autos[10]); es undefined
//por ende falso, por ende no se sigue ejecutando
while( i < autos.length  ) {
    if( i === 1) {
        //break;
        i++;
        continue; //esto dice que no se salga del ciclo
        //que siga ejecutando la siguiente linea
    }
    console.log( autos[i] )
    i = i + 1; // esto es lo mismo que i++
}


console.warn('Do while')
let j = 0;
do {
    console.log(autos[j]);
    j++;
}while( autos[j]);






