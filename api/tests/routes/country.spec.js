/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');




const agent = session(app);

describe('Countries routes ', () => {  
  it("Responde con los datos de Argentina al pedido por params",  () => {
      return agent.get("/countries/ARG")
      .expect(200)
      .expect((res)=> {
       /*  console.log(res.body) */
       expect(res.body[0].name).equal("Argentina");
       expect(res.body[0].imgFlag).equal("https://flagcdn.com/ar.svg");
       expect(res.body[0].continent).equal("South America");
       expect(res.body[0].capital).equal("Buenos Aires");
      });      
  });

  it("Responde con los datos de Colombia al pedido por query",  () => {
    return agent.get("/countries?name=col")
    .expect(200)
    .expect((res)=> {
     /*  console.log(res.body) */
     expect(res.body[0].name).equal("Colombia");
     expect(res.body[0].imgFlag).equal("https://flagcdn.com/co.svg");
     expect(res.body[0].continent).equal("South America");
     expect(res.body[0].capital).equal("Bogotá");
    });      
});

});


