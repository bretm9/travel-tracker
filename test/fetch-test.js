const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
import fetcher from '../src/fetch';

chai.use(spies);

describe('fetch', () => {
  beforeEach(() => {
    chai.spy.on(fetcher, [
      'getTravelerDestinations',
      'getTraveler',
      'getUserTrips',
      'getAllDestinations',
      'renderAfterFetch',
      'postRequestedTrip'
    ], () => true)
  });
  
  afterEach(() => {
    chai.spy.restore(fetcher);
  });

  it('should be able to get a specific traveler\'s destinations', () => {
    fetcher.getTravelerDestinations();
    expect(fetcher.getTravelerDestinations).to.have.been.called(1);
  });

  it('should be able to get a traveler and instantiate a new Traveler', () => {
    fetcher.getTraveler();
    expect(fetcher.getTraveler).to.have.been.called(1);
  });

  it('should be able to get a travelers trips and set them to a traveler\'s "trips" property', () => {
    fetcher.getUserTrips();
    expect(fetcher.getUserTrips).to.have.been.called(1);
  });

  it('should be able to get all destinations', () => {
    fetcher.getAllDestinations();
    expect(fetcher.getAllDestinations).to.have.been.called(1);
  });

  it('should invoke domUpdates renders after fetching', () => {
    fetcher.renderAfterFetch();
    expect(fetcher.renderAfterFetch).to.have.been.called(1);
  });

  it('should post a requested trip to the API', () => {
    fetcher.renderAfterFetch();
    expect(fetcher.renderAfterFetch).to.have.been.called(1);
  });
});