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

  it('should be able to get a specific traveler\'s destinations', () => {
    fetch.getTravelerDestinations();
    expect(fetch.getTravelerDestinations).to.have.been.called(1);
  });

  it('should be able to get a traveler and instantiate a new Traveler', () => {
    fetch.getTraveler();
    expect(fetch.getTraveler).to.have.been.called(1);
  });

  it('should be able to get a travelers trips and set them to a traveler\'s "trips" property', () => {
    fetch.getUserTrips();
    expect(fetch.getUserTrips).to.have.been.called(1);
  });

  it('should be able to get all destinations', () => {
    fetch.getAllDestinations();
    expect(fetch.getAllDestinations).to.have.been.called(1);
  });
});