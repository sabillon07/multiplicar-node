const { crearTabla, multiplicar } = require('./tablas/tablas') 
const {argv} = require('./config/yargs')
const colors = require('colors');



// let argv = process.argv
// let argumento = argv[2]
// let base = argumento.split('=')[1]
colors.setTheme({
    custom: ['green'],
    error : 'red'
  });

switch (argv._.join('')) {
    case 'listar':
        crearTabla( argv.base , argv.limite )
        .then( res => console.log(res))
        .catch( err => console.log(err))
        break;
    
    case 'multiplicar':
        console.log(multiplicar( argv.base , argv.limite ).custom)
        break;

    default:
        console.log('No se ha podido leer nada'.error)
        break;
}



