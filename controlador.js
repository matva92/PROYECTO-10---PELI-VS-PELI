var con = require("./conexionbd")

function obtenerCompetencias(req, res){


    var sqlCompetencias = "SELECT * FROM competencias"
    var sqlCompetenciasCount = "SELECT COUNT(*) AS COUNT FROM competencias"
    
    con.query(sqlCompetencias, function(error, resultado, fields){
        
        if(error){
            console.log("Hubo un error en la consulta", error.message)
            return res.status(404).send("Hubo un error en la consulta")
        }
        
        con.query(sqlCompetenciasCount, function(error, resultado2, fields){
            if(error){
                console.log("Hubo un error en la consulta", error.message)
                return res.status(404).send("Hubo un error en la consulta")
            }
            
            var response = {
                'competencias': resultado,
                'length': resultado2[0].COUNT
            }
            res.send(JSON.stringify(response)) 
        })
    })
}

module.exports = {
    obtenerCompetencias: obtenerCompetencias
}