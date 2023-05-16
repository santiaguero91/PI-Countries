const axios = require ("axios");
const { Country } = require("../db")


const getApiInfo = async() => {
    const getAllInfo = await axios.get(
        "https://restcountries.com/v3/all"  
        );   
        const ApiInfo = await getAllInfo.data.map(el => {
            return {
            id: el.cca3,
            name: el.name.common,
            imgFlag : el.flags[0],
            continent : el.continents[0],
            capital : el.capital != null ? el.capital[0] : "No data",
            subregion : el.subregion,
            area : el.area,
            population: el.population,   
            };
        });
         ApiInfo.forEach(element => {
            Country.findOrCreate({
                where:{name: element.name},
                defaults:{
                    id: element.id ,
                    name: element.name ,
                    imgFlag : element.imgFlag ,
                    continent : element.continent ,
                    capital : element.capital ,
                    subregion : element.subregion ,
                    area : element.area ,
                    population:element.population ,
                }
            })
        }); 
        return  ApiInfo
  }


module.exports = getApiInfo ;