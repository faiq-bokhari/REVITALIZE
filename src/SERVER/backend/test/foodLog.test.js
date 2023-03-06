const request = require('supertest');
let server;

beforeEach(()=>{
    app = require('../server');
  });
  
// afterEach(()=>{
//     app.close();
// })


test('should return 200 on get request',async() => {
    const res = await request(app)
    .get('/foodlog/hasan@gmail.com/2023-03-05')
    expect(res.status).toBe(200);
    //  ?foodName=waffles&calories=1000&fats=5&protein=40&carbs=20
    //  expect(res.body).toBe({
    //     "sucess": true,
    //     "message": "Meal successfully added",
    //     "_id": "640564d5be928801beecf06c",
    //     "foodName": "waffles",
    //     "calories": 1000,
    //     "carbs": 20,
    //     "fats": 5,
    //     "protein": 40,
    //     "foodDate": "2023-03-05T00:00:00.000Z",
    //     "email": "hasan@gmail.com"
    //  });
  });