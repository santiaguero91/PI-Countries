const axios = require ("axios");
const { Activity, Country } = require("../db")


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
        Country.bulkCreate(ApiInfo);  
        return  ApiInfo
  }



module.exports = getApiInfo;