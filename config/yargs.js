const argv = require ('yargs')
                        .options({
                            'b':{
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Es la Base de la multiplicacion'
                        },
                        'l':{
                            alias: 'listar',
                            type:'boolean',
                            default:'false',
                            describe: 'Muestra la Tabla en consola'
                        },
                        'c':{
                            alias:'colors',
                            type: 'boolean',
                            default: 'false',
                            describe: 'Activa el color en la consola'

                        },
                        'f':{
                            alias: 'fin',
                            type: 'number',
                            describe: 'hasta donde multiplicar'
                        }
                    })
                    
                        .check( (argv,options) =>{
                            if( isNaN( argv.b )){

                                throw 'El Valor ingresado no es un numero';
                            }
                            return true;
                        })
                        .argv;

module.exports = argv; 