'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var lessonCtrlStub = {
  index: 'lessonCtrl.index',
  show: 'lessonCtrl.show',
  create: 'lessonCtrl.create',
  update: 'lessonCtrl.update',
  destroy: 'lessonCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var lessonIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './lesson.controller': lessonCtrlStub
});

describe('Lesson API Router:', function() {

  it('should return an express router instance', function() {
    expect(lessonIndex).to.equal(routerStub);
  });

  describe('GET /api/lessons', function() {

    it('should route to lesson.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'lessonCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/lessons/:id', function() {

    it('should route to lesson.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'lessonCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/lessons', function() {

    it('should route to lesson.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'lessonCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/lessons/:id', function() {

    it('should route to lesson.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'lessonCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/lessons/:id', function() {

    it('should route to lesson.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'lessonCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/lessons/:id', function() {

    it('should route to lesson.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'lessonCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
