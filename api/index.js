//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require ("axios");
const { Country } = require("../api/src/db")
const getApiInfo = require("./src/routes/controllers")


/* const getApiInfo = async() => {
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
} */

// Syncing all the models at once.
conn.sync({ force: true }).then( async () => {
  await getApiInfo();
  console.log("Db conected");
  server.listen(3001,  async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
