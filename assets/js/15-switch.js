


const dia = 5;// 0=:domingo

//el break es para salirse del switch
//si no lo pongo sigue evaluando los siguientes casos
switch( dia ){//aqui lo que hace es dia === el valor de dia
    case 0:
        console.log('domingo');
        break;
    case 1:
        console.log('lunes');
        break;
    case 2:
        console.log('martes')
        break;
    default: // si no hay condicion especifica
    console.log('no es lunes, martes, ni domingo')
}   




