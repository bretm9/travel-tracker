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
});