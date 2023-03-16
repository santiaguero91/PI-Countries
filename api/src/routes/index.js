const { Router } = require('express');
const  rActivities = require("./rActivities")
const  rCountries = require("./rCountries")


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/countries", rCountries);
router.use("/activities", rActivities);


///////////////////////////////////////////////////////

/*    SET CLIENT_ENCODING TO 'utf8';    */
/*        SELECT * FROM country;        */
/*        SELECT * FROM activity;        */
/*        SELECT * FROM activity;        */
/*        SELECT * FROM activity_country;        */
module.exports = router;
