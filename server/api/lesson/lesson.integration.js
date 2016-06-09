'use strict';

var app = require('../..');
import request from 'supertest';

var newLesson;

describe('Lesson API:', function() {

  describe('GET /api/lessons', function() {
    var lessons;

    beforeEach(function(done) {
      request(app)
        .get('/api/lessons')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          lessons = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(lessons).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/lessons', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/lessons')
        .send({
          name: 'New Lesson',
          info: 'This is the brand new lesson!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newLesson = res.body;
          done();
        });
    });

    it('should respond with the newly created lesson', function() {
      expect(newLesson.name).to.equal('New Lesson');
      expect(newLesson.info).to.equal('This is the brand new lesson!!!');
    });

  });

  describe('GET /api/lessons/:id', function() {
    var lesson;

    beforeEach(function(done) {
      request(app)
        .get('/api/lessons/' + newLesson._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          lesson = res.body;
          done();
        });
    });

    afterEach(function() {
      lesson = {};
    });

    it('should respond with the requested lesson', function() {
      expect(lesson.name).to.equal('New Lesson');
      expect(lesson.info).to.equal('This is the brand new lesson!!!');
    });

  });

  describe('PUT /api/lessons/:id', function() {
    var updatedLesson;

    beforeEach(function(done) {
      request(app)
        .put('/api/lessons/' + newLesson._id)
        .send({
          name: 'Updated Lesson',
          info: 'This is the updated lesson!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedLesson = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedLesson = {};
    });

    it('should respond with the updated lesson', function() {
      expect(updatedLesson.name).to.equal('Updated Lesson');
      expect(updatedLesson.info).to.equal('This is the updated lesson!!!');
    });

  });

  describe('DELETE /api/lessons/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/lessons/' + newLesson._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when lesson does not exist', function(done) {
      request(app)
        .delete('/api/lessons/' + newLesson._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
