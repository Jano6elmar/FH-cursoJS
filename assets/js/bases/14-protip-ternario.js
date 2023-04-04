


 const elMayor0 = (a,b) => {
    return (a > b ) ? a : b;   
} 
const elMayor1 = (a,b) => (a > b) ? a : b;   

const tieneMembresia = ( miembro ) => ( miembro ) ? '2 dolares': '10 dolares'

console.log( elMayor1(20,15) )

console.log(tieneMembresia(false) );

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    //aqui puede ir cualquier cosa
    //una funcion autoinbocable
    //(()=> 'Dr. Normal')(),
    //0 las funciones de arriba
    //elMayor0(10,15)
];

console.log( amigosArr)

//otro uso

const nota  = 83.5;
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C' : 'F';

console.log({ nota, grado}); 
              