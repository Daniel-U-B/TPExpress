let database = require('../data/database')

const controller = {
    index:function(req,res){
        res.write("Bienvenidos a la concesionaria \n\n")
        res.write('Estas son nuestras sucursales\n')
        database.forEach(concesionarias=>{
            res.write(concesionarias.sucursal + '\n')
        })
        res.end()
    }
}
module.exports = controller