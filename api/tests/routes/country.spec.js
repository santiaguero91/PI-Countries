/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');


/* 

const agent = session(app);
const country = {
  name: 'Argentina',
  id: 'ARG',
  imgFlag: 'asd',
  continent: 'Americas',
  capital: 'BSAS',
  population: 40000
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: false })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 250', () =>
      agent.get('/countries').expect(250)
    );
  });

  
  it("Responde con el nombre del Pais",  () => {
      return agent.get("/countries/ARG")
      .expect(200)
      .expect((res)=> {
        console.log(res.body)
       expect(res.body[0].name).equal("Argentina");
       expect(res.body[0].imgFlag).equal("asd");
       expect(res.body[0].continent).equal("Americas");
       expect(res.body[0].capital).equal("BSAS");
      });      
  });


});


 */

