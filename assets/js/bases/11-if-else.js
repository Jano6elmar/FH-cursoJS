
let a = 5;

if (a>=10) {
    console.log('a es mayor o igual a 10')
} else {
    console.log('a es menor a 10')
}

//console.log('fin programa');

const hoy = new Date(); //{}
let dia   = hoy.getDay(); //0:domingo, 1: lunes, etc

console.log({ dia });

if( dia === 0 ){
    console.log('domingo');
}else if( dia === 1) {
    console.log('lunes');

     // if ( dia === 1 ) {
    //     console.log('Lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }

}else if( dia === 2) {
    console.log('martes');
}else {
    console.log('no es lunes, martes o domingo')
}

//sin usar if else, o switch, unicamente objetos
dia = 6;//0:domingo, 1: lunes, etc

const diaNombre = {
    0:'domingo', 
    1:'lunes', 
    2:'martes', 
    3:'miercoles', 
    4:'jueves', 
    5:'viernes', 
    6:'sabado',
}

const diaNombre2 = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado',];// día de la semana

console.log( diaNombre2[dia] );