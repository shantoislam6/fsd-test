import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';

import app from '../src/app';

chai.should();
chai.use(chaiHttp);

describe('GET /', () => {
  it('should return homepage with 200 status code', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('GET /health', () => {
  it('should return 200', (done) => {
    chai.request(app)
      .get('/health')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('success').eql(true);
        done();
      });
  });
});
