const fs = require('fs');
const colors = require('colors/safe');

const nombreArchivo = async ( base = 5)=>{
        try{
            const creaArchivo = await crearArchivo( base );
            return `El archivo tiene por nombre Tabla-${ base }.txt`;
        }catch(error){
            throw error;
        }
}


const crearArchivo = async ( base = 5, listar , final = 10)=>{

    try {
        let salida = `=========================\n=========================\n===    Tabla del ${ base }    ===\n=========================\n=========================\n`;
        let consola = `=========================\n=========================\n===    Tabla del ${ base }    ===\n=========================\n=========================\n`.rainbow;

    for (let i = 1; i <=final; i++) {
        salida += `${ base } x ${ i } = ${ base * i }\n`;
        
        consola += `${ base } ${colors.random('x')} ${ i } = ${ base * i }\n`;
    }
    //console.log(salida);
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

        if(listar==true){console.log(consola); }

         return `tabla-${ base }.txt`;

       
    
    } catch (err) {
        throw err;
    }
    
    
    //console.log(`tabla-${ base }.txt Creada con Exito`);//promesa 

}

// const crearArchivo = ( base = 5 )=>{

    
//     let salida = `
//     =========================
//     =========================
//     ===    Tabla del ${ base }    ===
//     =========================
//     =========================

//     `;

//     for (let i = 1; i <= 10; i++) {
//         salida += `${ base } x ${ i } = ${ base * i }\n`;
//     }
//     //console.log(salida);
//     return new Promise((resolve, reject)=>{
//         fs.writeFileSync(`tabla-${ base }.txt`, salida);
//          const nombreArchivo = `tabla-${ base }.txt`;
//         (nombreArchivo)
//             ? resolve( nombreArchivo )
//             : reject( `error al crear el archivo` )
//     });
    
//     //console.log(`tabla-${ base }.txt Creada con Exito`);//promesa 

// }

module.exports = {
    crearArchivo
}