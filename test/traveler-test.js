import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/traveler';

let traveler1Data, traveler1;

describe('Traveler', () => {
  beforeEach(() => {
    traveler1Data = {
      "id": 1,
      "name": "Jon Doe",
      "travelerType": "relaxer"
    }

    traveler1 = new Traveler(traveler1Data);
    traveler1.trips = [
      {
        "id": 1,
        "userID": 1,
        "destinationID": 1,
        "travelers": 1,
        "date": "2020/09/16",
        "duration": 1,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 2,
        "userID": 1,
        "destinationID": 2,
        "travelers": 2,
        "date": "2020/05/01",
        "duration": 2,
        "status": "approved",
        "suggestedActivities": []
      }
    ];

    traveler1.allDestinations = [
      {
        "id": 1,
        "destination": "Lima, Peru",
        "estimatedLodgingCostPerDay": 1,
        "estimatedFlightCostPerPerson": 5,
        "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        "alt": "overview of city buildings with a clear sky"
      },
      {
        "id": 2,
        "destination": "Stockholm, Sweden",
        "estimatedLodgingCostPerDay": 2,
        "estimatedFlightCostPerPerson": 10,
        "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "city with boats on the water during the day time"
      }
    ]
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should be able to instantiate a traveler', () => {
    expect(traveler1).to.be.an.instanceof(Traveler);
  });

  it('should have a property of id', () => {
    expect(traveler1.id).to.equal(1);
  });

  it('should have a property of name', () => {
    expect(traveler1.name).to.equal('Jon Doe');
  });

  it('should have a property of travelerType', () => {
    expect(traveler1.travelerType).to.equal('relaxer');
  });

  it('should be able to get total money spent this year', () => {
    expect(traveler1.getTotalSpentThisYear()).to.equal(30);
  });
});