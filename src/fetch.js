import Traveler from './traveler'
import domUpdates from './dom-updates'
import TripsRepo from './trips-repo';
import Trip from './trip'
import DestinationsRepo from './destinations-repo';
import Destination from './destination'

let allDestinations;

let allTrips;

let fetcher = {

  getTravelerDestinations(traveler, userID) {
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
      .then(response => response.json())
      .then(data => {
        allDestinations = new DestinationsRepo(data.destinations);
        allDestinations.generateInstantiations(Destination)
      })
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
        this.getAllTrips(traveler);
      })
      .catch(err => console.log('Fetch error: ', err))
  },

  getAllTrips(traveler) {
    let allTripsData;
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
      .then(response => response.json())
      .then(data => {
        allTripsData = data;
        allTrips = new TripsRepo(allTripsData.trips);
        allTrips.generateInstantiations(Trip);
        allTrips.instantiations.forEach(trip => {
          trip.getTripCost(allDestinations.instantiations);
        })
      })
      .then(() =>{
        traveler.getUserTrips(allTrips.instantiations, allDestinations.instantiations);
      })
      .then(() => {
        this.renderAfterFetch(traveler)
      })
      .catch(err => console.log('Fetch error: ', err))
  },

  renderAfterFetch(traveler) {
    domUpdates.renderUserTrips(traveler, allDestinations);
    domUpdates.renderTotalSpentThisYear(traveler);
    domUpdates.renderDesinationCards(traveler);
  },

  postRequestedTrip(traveler, userID, nodes, selectedDestination) {
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
      .then(response => response.json())
      .then(data => {
        allTrips = data;
      })
      .then(() => {
        let init = this.generatePostInit(userID, nodes, selectedDestination);
        fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', init)
          .then(response => response.json())
          .then(() => {
            this.getTravelerDestinations(traveler, userID)
          })
          .catch(err => console.log('Fetch error: ', err))
      })
      .catch(err => console.log('Fetch error: ', err))
  },

  generatePostInit(userID, nodes, selectedDestination) {
    return {
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
    }
  }
}

export default fetcher;