const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
import fetch from '../src/fetch';

chai.use(spies);

describe('fetch', () => {
  beforeEach(() => {
    chai.spy.on(fetch, ['getTraveler'], () => true)
  });
  
  afterEach(() => {
    chai.spy.restore(fetch);
  });

  it('should be able to render user trips to the DOM', () => {
    fetch.getTraveler();
    expect(fetch.getTraveler).to.have.been.called(1);
  });
});