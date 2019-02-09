const should = require('should');
const request = require('supertest');
const app = require('../../app');
const models = require('../../models/models');

//user
describe('User Test Driven Development', () =>{
    const syncDatabase = require('../../../bin/sync-database');
    before('Sync test database', () =>{
        // sync database ...

        syncDatabase().then(() => {
            console.log('Test database sync');
        });
    });

    
    const testUsers = [
        {name: 'test1'},
        {name: 'test2'},
        {name: 'test3'}
    ];
    before('insert 3 users into database', (done) => {
        models.User.bulkCreate(testUsers).then(() => done());
    });

    after('Clear up test database', (done) => {
        models.User.drop();
        syncDatabase().then(() => done());
        console.log("after\n");
    });

    //read
    it('GET /users', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .end((err, res) => {
                if (err){
                    throw err;
                }

                // console.log("read\n");
                done();
            });
    });

    //read
    it('GET /users/:id', (done) => {
        request(app)
        .get('/users/1')
        .expect(200)
        .end((err, res) => {
            if(err){
                throw err;
            }
            done();
        });
    });

    //update
    it('PUT /users/:id', (done) => {
        request(app)
        .put('/users/1')
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

    //create
    it('POST /users', (done) => {
        request(app)
        .post('/users')
        .send({
            name: 'test'
        })
        .expect(201)
        .end((err, res) => {
            if(err){
                throw err;
            }
            done();
        });
    });
    
    //destroy
    it('DELETE /users/:id', (done) => {
        request(app)
        .delete('/users/1')
        .expect(204)
        .end((err, res) => {
            if(err){
                throw err;
            }
            done();
        });
    });
});


