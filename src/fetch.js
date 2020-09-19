import Traveler from './traveler'
import domUpdates from './dom-updates'

let allDestinations;

let fetcher = {

  getTraveler(traveler) {
    fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/1`)
      .then(response => response.json())
      .then(data => {
        traveler = new Traveler(data);
        this.getUserTrips(traveler);
      })
      .catch(err => console.log('Fetch error: ', err))
  },

  getUserTrips(traveler) {
    let allTrips;
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
      .then(response => response.json())
      .then(data => {
        allTrips = data;
      })
      .then(() => {
        let userTrips = allTrips.trips.filter(trip => {
          return trip.userID === traveler.id;
        });
        traveler.trips = userTrips;
        domUpdates.renderUserTrips(traveler, allDestinations)
      })
      .catch(err => console.log('Fetch error: ', err))
  }
}

export default fetcher;