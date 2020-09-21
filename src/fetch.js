import Traveler from './traveler'
import domUpdates from './dom-updates'

let allDestinations;

let fetcher = {

  getTravelerDestinations(traveler, userID) {
    // this.getAllDestinations(allDestinations)
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
      .then(response => response.json())
      .then(data => allDestinations = data.destinations)
      .then(() => {
        this.getTraveler(traveler, userID);
      })
      .catch(err => console.log('Fetch error: ', err))
  },

  getTraveler(traveler, userID) {
    fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${userID}`)
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
        traveler.allDestinations = allDestinations;
        traveler.trips = userTrips;
        this.renderAfterFetch(traveler);
      })
      .catch(err => console.log('Fetch error: ', err))
  },

  getAllDestinations(allDestinations) {
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
      .then(response => response.json())
      .then(data => {
        allDestinations = data
      })
      .catch(err => console.log('Fetch error: ', err))
  },

  renderAfterFetch(traveler) {
    domUpdates.renderUserTrips(traveler, traveler.allDestinations);
    domUpdates.renderTotalSpentThisYear(traveler);
    domUpdates.renderDesinationCards(traveler);
  },

  postRequestedTrip(traveler, userID, nodes, selectedDestination) {
    let allTrips;
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
      .then(response => response.json())
      .then(data => {
        allTrips = data;
      })
      .then(() => {
        let init = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: (allTrips.trips.length + 1), 
            userID, 
            destinationID: selectedDestination, 
            travelers: parseInt(nodes.travelerQuantitySelection.value),
            date: nodes.startDateInput.value,
            duration: parseInt(nodes.durationSelection.value), 
            status: 'pending', 
            suggestedActivities: []
          })
        };
        fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', init)
          .then(response => response.json())
          .then(() => {
            this.getTravelerDestinations(traveler, userID)
          })
          .catch(err => console.log('Fetch error: ', err))
      })
      .catch(err => console.log('Fetch error: ', err))
  }
}

export default fetcher;