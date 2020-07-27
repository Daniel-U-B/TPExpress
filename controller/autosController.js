let database = require('../data/database')

const controller = {
    index:function(req,res){
        res.write("Autos de nuestras concesionarias \n\n")
        database.forEach(concesionarias=>{
            res.write('------------------------\n')
            res.write(concesionarias.sucursal + '\n')
            res.write('------------------------\n')
            concesionarias.autos.forEach(auto=>{
                res.write(auto.marca + ' ' + auto.modelo + '\n')
            })
        })
        res.end()
    }
}
module.exports = controller