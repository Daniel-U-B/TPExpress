let database = require('../data/database')

const controller = {
    index:function(req,res){
        res.write("Nuestras Sucursales \n\n")
        database.forEach(concesionarias=>{
            res.write(concesionarias.sucursal + '\n')
            res.write(concesionarias.direccion + '\n')
            res.write(concesionarias.telefono + '\n\n')
        })
        res.end()
    },
    sucursal:function(req,res){
        let sucId = req.params.id
        database.forEach(concesionarias=>{
            if(concesionarias.sucursal.toLowerCase() == sucId.toLowerCase()){
            res.write(concesionarias.sucursal + '\n')
            res.write(concesionarias.direccion + '\n')
            res.write(concesionarias.telefono + '\n\n')
            res.write('Autos disponibles en la sucursal \n')
            concesionarias.autos.forEach(auto=>{
                res.write(auto.marca + ' ' + auto.modelo + ' ' + auto.anio + '\n')
            })
            res.end("\nCantidad de autos disponibles: " + concesionarias.autos.length)
            }
        })
        res.end('No tenemos sucursales ahi')
    }
}
module.exports = controller