let database = require('../data/database')

const controller = {
    index:function(req,res){
        database.forEach(concesionarias=>{
            concesionarias.autos.forEach(auto=>{
                res.write(auto.marca + '\n')
            })
        })
        res.end()
    },
    marcas:function(req,res){
        let sucId = req.params.id
        database.forEach(concesionarias=>{
            concesionarias.autos.forEach(auto=>{
                if(auto.marca.toLowerCase() == sucId.toLowerCase()){
                    res.write(auto.marca + ' ' + auto.modelo + ' ' + auto.anio + '\n')
                }  
            })
        })
        res.end()
    }
}
module.exports = controller