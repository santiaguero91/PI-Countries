/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Activity, conn } = require('../../src/db.js');
const agent = session(app);

const activity = {
    "id": 9,
    "name": "Escalar el Everest",
    "difficulty": "1",
    "duration": 25,
    "season": ["Summer"],
    "country": ["China"]
};

/* 

describe('Activity routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Activity.sync({ force: false })
    .then(() => Activity.create(activity)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
});
 */


it("1 | POST a la ruta /activities", async () => {
  const activity = {
    "id": 9,
    "name": "Escalar el Everest",
    "difficulty": "1",
    "duration": 25,
    "season": ["Summer"],
    "country": ["China"]
};
  const response = await agent.post("/activities").send(activity);
  expect(response.status).toBeLessThan(300);
})