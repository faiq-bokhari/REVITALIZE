// const request = require('supertest');
// let server;

// beforeEach(()=>{
//     server = require('../server');
//   });
  
// afterEach(()=>{
//     server.close();
// })


// test('should return expenses based on duration ',async() => {
//     const res = await request(server)
//     .post('/foodlog/:email/:foodDate')
//     .send({
//           duration:"month",
//           currency:"SDG",
//           startDate:"2019-12-01",
//           endDate:"2019-12-30"
//      })
//      expect(res.status).toBe(201);
//      expect(res.body.totalMonthExpenses).toBe(4000);
//   });