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
   } = req.body;

   let activityCreated = await Activity.create({
    name,
    difficulty,
    duration,
    season,
    country
})

let countryDB = await Country.findAll({where:{ name:country}})
activityCreated.addCountry(countryDB)
res.send("Actividad Creado con exito")
});


router.get("/", async(req,res) => {
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
    if(id){
        Activity.destroy(
        { where: { id: id }
        });
        res.status(200).send("activity deleted")
    } else{
        res.status(404).send("Can't find such actiity")
    }
}); 
/* 
router.put("/:id", async(req,res) => {
    
}); 

 */

module.exports = router;