const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
import domUpdates from '../src/dom-updates';

chai.use(spies);

describe('domUpdates', () => {
  beforeEach(() => {
    chai.spy.on(domUpdates, ['renderUserTrips', 'renderTotalSpentThisYear'], () => true)
  });

  afterEach(() => {
    chai.spy.restore(domUpdates);
  });

  it('should be able to render user trips to the DOM', () => {
    domUpdates.renderUserTrips();
    expect(domUpdates.renderUserTrips).to.have.been.called(1);
  });

  it('should be able to render user\'s total money spent this year', () => {
    domUpdates.renderTotalSpentThisYear();
    expect(domUpdates.renderTotalSpentThisYear).to.have.been.called(1);
  });
});