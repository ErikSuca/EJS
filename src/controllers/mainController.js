// Acá nos falta nuestra fuente de datos
let seanson = 'venano';



// Acá nos falta un objeto literal con las acciones para cada ruta
const controladorMain = {
    index:(req, res)=>{
        res.render('index', {temporada:seanson})
    }
}

// Acá exportamos el resultado
module.exports = controladorMain;