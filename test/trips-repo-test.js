import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/trip';
import TripsRepo from '../src/trips-repo'

let tripsData, tripsRepo;

describe('Trip', () => {
  beforeEach(() => {
    tripsData = [
      {
        id: 1,
        userID: 2,
        destinationID: 1,
        travelers: 1,
        date: "2020/05/05",
        duration: 2,
        status: "pending",
        suggestedActivities: []
      },
      {
        id: 2,
        userID: 3,
        destinationID: 1,
        travelers: 3,
        date: "2020/05/06",
        duration: 1,
        status: "pending",
        suggestedActivities: []
      }
    ]

    tripsRepo = new TripsRepo(tripsData)
  });

  it('should be a function', () => {
    expect(TripsRepo).to.be.a('function');
  });

  it('should be able to instantiate a traveler', () => {
    expect(tripsRepo).to.be.an.instanceof(TripsRepo);
  });

  it('should have a property of data', () => {
    expect(tripsRepo.data).to.equal(tripsData);
  });

  it('should have a property of instantiations', () => {
    expect(tripsRepo.instantiations).to.deep.equal([]);
  });

  it('should be able to instantiate Trips', () => {
    tripsRepo.generateInstantiations(Trip);
    expect(tripsRepo.instantiations[0]).to.be.instanceOf(Trip);
  });
});