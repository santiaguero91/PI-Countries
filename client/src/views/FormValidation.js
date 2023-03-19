
function validate (activityData) {
    let errors = {}
    if(!activityData.name){
        errors.name = "Name required"
    } else if (!activityData.difficulty){
        errors.difficulty = "Difficulty required"
    } else if (!activityData.duration){
        errors.duration = "Duration required"
    } else if (activityData.season.length=== 0){
        errors.season = "Season required"
    } else if (!activityData.country.length=== 0){
        errors.country = "Select country"
    } 
    return errors
}

export default validate;