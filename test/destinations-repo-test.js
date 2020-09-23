import chai from 'chai';
const expect = chai.expect;

import DestinationsRepo from '../src/destinations-repo';
import Destination from '../src/destination';

let destinationsData, destinationsRepo;

describe('DestinationsRepo', () => {
  
  beforeEach(() => {
    destinationsData = [
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

    destinationsRepo = new DestinationsRepo(destinationsData)
  });

  it('should be a function', () => {
    expect(DestinationsRepo).to.be.a('function');
  });

  it('should be able to instantiate a traveler', () => {
    expect(destinationsRepo).to.be.an.instanceof(DestinationsRepo);
  });

  it('should have a property of data', () => {
    expect(destinationsRepo.data).to.equal(destinationsData);
  });

  it('should have a property of instantiations', () => {
    expect(destinationsRepo.instantiations).to.deep.equal([]);
  });

  it('should be able to instantiate Trips', () => {
    destinationsRepo.generateInstantiations(Destination);
    expect(destinationsRepo.instantiations[0]).to.be.instanceOf(Destination);
  });
});