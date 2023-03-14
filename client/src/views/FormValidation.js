
function validate (activityData) {
    let errors = {}
    if(!activityData.name){
        errors.name = "Se requiere un nombre"
    } else if (!activityData.difficulty){
        errors.difficulty = "Se requiere una difficulty"
    } else if (!activityData.duration){
        errors.duration = "Se requiere una duration"
    } else if (!activityData.season){
        errors.season = "Se requiere una season"
    } else if (!activityData.country){
        errors.country = "Selecciona al menos un pais"
    } 
    return errors
}

export default validate;