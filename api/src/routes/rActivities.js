const { Router } = require('express');
const { Activity, Country } = require("../db")

const router = Router();

router.post("/", async (req,res) => {
    let {
        name,
        difficulty,
        duration,
        season,
        country,
        img
   } = req.body;

   let activityCreated = await Activity.create({
    name,
    difficulty,
    duration,
    season,
    country,
    img
})

let countryDB = await Country.findAll({where:{ name:country}})
activityCreated.addCountry(countryDB)
res.send("Actividad Creado con exito")
});


router.get("/", async(req,res) => {
    try {
    const name = req.query.name
    let activitiesTotal = await Activity.findAll();
    if(name){
        let activityName = await activitiesTotal.filter(el =>el.name.toLowerCase().includes(name.toLowerCase()))
        activityName.length ?
        res.status(200).send(activityName):
        res.status(404).send("Can't find such activity")
    } else{
        res.status(200).send(activitiesTotal)
    }
} catch (error) {
    console.log(error)
}
})

router.get("/", async(req,res) => {
    try {
        let result = await Activity.findAll();
        if (!result.length) {
            return res
                .status(200)
                .send("No se encuentran actividades")
        }
        return res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
});

router.delete("/:id", async(req,res) => {
    const {id} = req.params;
    try {
    if(id){
        Activity.destroy(
        { where: { id: id }
        });
        res.status(200).send("activity deleted")
    } else{
        res.status(404).send("Can't find such actiity")
    }
} catch (error) {
    console.log(error)
}
}); 



router.put("/", async(req,res) => {
    const name = req.query.name
        let {
        difficulty,
        duration,
        season,
        country,
        img
   } = req.body;

if(!difficulty || !duration || !season || !country ) {
    return res
    .status(404)
    .json({error: "Falta llenar alguno de los parametros"})
}

    let activitiesTotal = await Activity.findAll();
    if(name){
        let activityName = await activitiesTotal.filter(el =>el.name.toLowerCase() === name.toLowerCase())
        await Activity.update({
            id: activityName[0].id,
            difficulty: difficulty,
            duration: duration,
            season: season,
            country: country,
            img: img
            },
            { where: { 
                name: name 
            }
        }
        )
        activityName ?        
        res.status(200).send(activityName):
        res.status(404).send("Can't find such activity")
    } else{
        res.status(200).send(activitiesTotal)
    }
        
}); 



module.exports = router;