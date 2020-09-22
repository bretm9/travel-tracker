import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/trip';

let tripData, trip;

describe('Trip', () => {
  beforeEach(() => {
    tripData = {
      id: 1,
      userID: 2,
      destinationID: 3,
      travelers: 4,
      date: "2020/05/05",
      duration: 6,
      status: "pending",
      suggestedActivities: []
    }

    trip = new Trip(tripData)
  });

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should be able to instantiate a traveler', () => {
    expect(trip).to.be.an.instanceof(Trip);
  });

  it('should have a property of id', () => {
    expect(trip.id).to.equal(1);
  });

  it('should have a property of userID', () => {
    expect(trip.userID).to.equal(2);
  });

  it('should have a property of destinationID', () => {
    expect(trip.destinationID).to.equal(3);
  });

  it('should have a property of travelers', () => {
    expect(trip.travelers).to.equal(4);
  });

  it('should have a property of date', () => {
    expect(trip.date).to.equal("2020/05/05");
  });

  it('should have a property of duration', () => {
    expect(trip.duration).to.equal(6);
  });

  it('should have a property of status', () => {
    expect(trip.status).to.equal("pending");
  });

  it('should have a property of suggestedActivities', () => {
    expect(trip.suggestedActivities).to.deep.equal([]);
  });
});
