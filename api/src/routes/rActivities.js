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

module.exports = router;