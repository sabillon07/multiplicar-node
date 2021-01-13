const fs = require('fs');


let multiplicar = (base, limite = 10) => {
    let data = '';

    for(let i = 1; i<=limite; i++){
    data += `${base} x ${i} = ${base * i}\n`
    };

    return data
}

  let crearTabla = ( base , limite = 10 )=>{
      return new Promise((resolve,reject)=>{

        if(!Number(base) ) {
            reject(`${base} o ${limite} No es un numero, por favor vuelva a escribir la orden`)
             return
        }

        let data = multiplicar(base , limite)
       
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data , (err) => {
            if (err) reject(err);
            resolve(`The file tabla-${base}.txt has been saved!`)
          });   

      })
  }


  module.exports = {
      crearTabla,
      multiplicar
  }

