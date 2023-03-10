const colors = require('colors');

const argv = require('./config/yargs')
const { crearArchivo, nombreArchivo }= require('./helpers/multiplicar')

//activar color 

if(argv.c == true){
    colors.enable();
}else{
    colors.disable();
}

console.clear(); // limpia la consola antes de realizar la tarea 
//opcion l va a ser listar booleano opcional en default en false

// se enviara como argumento para crear el listado de lo que creamos 

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log( base );


// // console.log( process.argv );
// console.log( argv.b );

console.log(`la base yargs es: ${ argv.base }`);
// console.log(`dato en l: ${ argv.l}`);
// console.log(`multiplicar hasta: ${ argv.f }`);
//const base = 40; 

crearArchivo( argv.b, argv.l, argv.f)
                .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
                .catch( err => console.log(err));

// fs.writeFile( `tabla-${ base }.txt`, salida, (err)=>{ 
//     if(err) throw err;
//     console.log(`tabla-${ base }.txt Creada con exito`);
// } )