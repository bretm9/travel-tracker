import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/trip';

let tripData, trip, destinations;

describe('Trip', () => {
  beforeEach(() => {
    tripData = {
      id: 1,
      userID: 2,
      destinationID: 1,
      travelers: 1,
      date: "2020/05/05",
      duration: 2,
      status: "pending",
      suggestedActivities: []
    }

    destinations = [
      {
        id: 1,
        destination: "Lima, Peru",
        estimatedLodgingCostPerDay: 1,
        estimatedFlightCostPerPerson: 2,
        image: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        alt: "overview of city buildings with a clear sky"
      },
      {
        id: 2,
        destination: "Stockholm, Sweden",
        estimatedLodgingCostPerDay: 1,
        estimatedFlightCostPerPerson: 2,
        image: "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "city with boats on the water during the day time"
      }
    ]

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
    expect(trip.destinationID).to.equal(1);
  });

  it('should have a property of travelers', () => {
    expect(trip.travelers).to.equal(1);
  });

  it('should have a property of date', () => {
    expect(trip.date).to.equal("2020/05/05");
  });

  it('should have a property of duration', () => {
    expect(trip.duration).to.equal(2);
  });

  it('should have a property of status', () => {
    expect(trip.status).to.equal("pending");
  });

  it('should have a property of suggestedActivities', () => {
    expect(trip.suggestedActivities).to.deep.equal([]);
  });

  it('should be able to get trip cost', () => {
    trip.getTripCost(destinations)
    expect(trip.tripCost).to.deep.equal('4.40');
  });
});
