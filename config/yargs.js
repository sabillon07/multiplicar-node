const argv = require('yargs')
            .command(['listar','multiplicar'],'Imprime en consola la tabla de multiplicar',{
                base: {
                    demand : true,
                    alias : 'b'
                },
                limite:{
                    default : 10,
                    alias : 'l'
                }
            })
            // .command('mostrar', 'Este si imprime',{
            //     base
            // })
            .help()
            .argv

module.exports={
    argv
}