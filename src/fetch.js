import Traveler from './traveler'

let fetch = {

  getTraveler(traveler, userID) {
    fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${userID}`)
      .then(response => response.json())
      .then(data => {
        traveler = new Traveler(data);
        // getTravelerDestinations(traveler);
      });
  },

  // getTravelerDestinations(traveler) {
  //   let allDestinations;
  //   fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
  //     .then(response => response.json())
  //     .then(data => allDestinations = data)
  //     .then(
  //       fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
  //         .then(response => response.json())
  //         .then(data => {
  //           let userTrips = data.filter(trip => {
  //             return trip.userID === traveler.id;
  //           });
  //           traveler.trips = userTrips;
  //           domUpdates.renderUserTrips(traveler.trips, allDestinations, tripsNode);
  //         })
  //         .catch(err => console.log('Fetch error:', err))
  //     )
  //     .catch(err => console.log('Fetch error:', err))
  // }
}

export default fetch;