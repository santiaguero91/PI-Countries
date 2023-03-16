const { Router } = require('express');
const { Activity, Country } = require("../db")


const router = Router();
//////////////////////////////////////////////

const getDbInfo = async() => {
    return await Country.findAll({
        include:{
            model: Activity,
            attributes:["name", "id", "name", "difficulty", "duration", "season"],
            through:{attributes: []},
        }
    })
}

router.get("/", async(req,res) => {
    const name = req.query.name
    let countriesTotal = await getDbInfo();
    if(name){
        let countryName = await countriesTotal.filter(el =>el.name.toLowerCase().includes(name.toLowerCase()))
        countryName.length ?
        res.status(200).send(countryName):
        res.status(404).send("Can't find such country")
    } else{
        res.status(200).send(countriesTotal)
    }
})

router.get("/:id", async(req,res) => {
    const id = req.params.id
    let countriesTotal = await getDbInfo();
    if(id){
        let countryId = await countriesTotal.filter(el => el.id.toLowerCase() == id.toLowerCase()) // aca hay que cambiar el "==" , pero no me acuerdo, peude q este en Rick y morty o en algun otro repaso. 
        countryId.length? 
        res.status(200).json(countryId) :
        res.status(404).send("Country not found")   
        }
})

module.exports = router;