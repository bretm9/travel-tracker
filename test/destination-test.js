import chai from 'chai';
const expect = chai.expect;

import Destination from '../src/destination';

let destination, destinationData;

describe('Destination', () => {
  beforeEach(() => {
    destinationData =
    {
      id: 1,
      destination: "Lima, Peru",
      estimatedLodgingCostPerDay: 1,
      estimatedFlightCostPerPerson: 2,
      image: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
      alt: "overview of city buildings with a clear sky"
    }
    destination = new Destination(destinationData);
  });

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  });

  it('should be able to instantiate a destination', () => {
    expect(destination).to.be.an.instanceof(Destination);
  });

  it('should have a property of id', () => {
    expect(destination.id).to.equal(1);
  });

  it('should have a property of destination', () => {
    expect(destination.destination).to.equal("Lima, Peru");
  });

  it('should have a property of estimatedLodgingCostPerDay', () => {
    expect(destination.estimatedLodgingCostPerDay).to.equal(1);
  });

  it('should have a property of estimatedFlightCostPerPerson', () => {
    expect(destination.estimatedFlightCostPerPerson).to.equal(2);
  });

  it('should have a property of image', () => {
    expect(destination.image).to.equal("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
  });

  it('should have a property of alt', () => {
    expect(destination.alt).to.equal("overview of city buildings with a clear sky");
  });
});