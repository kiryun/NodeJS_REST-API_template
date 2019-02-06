const should = require('should');
const request = require('supertest');
const app = require('../../app');

//read
describe('GET /users', () =>{
    it('Should return 200 status code', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .end((err, res) => {
                if (err){
                    throw err;
                }
                done();
            });
    });
    
});

//read
describe('GET /users/:id', () =>{
    it('Should return 200 status code', (done) => {
        request(app)
        .get('/users/5')
        .expect(200)
        .end((err, res) => {
            if(err){
                throw err;
            }
            done();
        });
    });
});

// //create
// describe('POST /users', () =>{
//     it('Should return 200 status code', (done) => {
//         request(app)
//         .put('/users')
//         .send({
//             name: 'test'
//         })
//         .expect((err, res) => {
//             if(err){
//                 throw err;
//             }
//             done();
//         });
//     });
// });

//destroy
// describe('DELETE /users/:id', () => {
//     before()

//     it('Should return 200 status code', (done) => {
        
//     })
// });

//update
describe('PUT /users/:id', () => {
    it('Should return 200 status code', (done) => {
        request(app)
        .put('/users/5')
        .send({
            name: 'foo'
        })
        .expect(200)
        .end((err, res) => {
            if(err){
                throw err;
            }
            done();
        });
    });
});
