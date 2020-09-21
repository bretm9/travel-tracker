const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
import domUpdates from '../src/dom-updates';

chai.use(spies);

describe('domUpdates', () => {
  beforeEach(() => {
    chai.spy.on(domUpdates, [
      'toggleMainView', 
      'renderUserTrips', 
      'renderTotalSpentThisYear', 
      'renderDesinationCards', 
      'selectionError'
    ], () => true)
  });

  afterEach(() => {
    chai.spy.restore(domUpdates);
  });

  it('should be able to toggle the main view', () => {
    domUpdates.toggleMainView();
    expect(domUpdates.toggleMainView).to.have.been.called(1);
  });

  it('should be able to render user trips to the DOM', () => {
    domUpdates.renderUserTrips();
    expect(domUpdates.renderUserTrips).to.have.been.called(1);
  });

  it('should be able to render user\'s total money spent this year to the DOM', () => {
    domUpdates.renderTotalSpentThisYear();
    expect(domUpdates.renderTotalSpentThisYear).to.have.been.called(1);
  });

  it('should be able to render destination cards to the DOM', () => {
    domUpdates.renderDesinationCards();
    expect(domUpdates.renderDesinationCards).to.have.been.called(1);
  });

  it('should be able to render selection error to the DOM', () => {
    domUpdates.selectionError();
    expect(domUpdates.selectionError).to.have.been.called(1);
  });
});