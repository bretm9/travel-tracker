import bookedTripsBody from './index'

let domUpdates = {

  // toggleMainView(loginNode, navNode, mainNode) {
  //   loginNode.classList.toggle('hidden');
  //   navNode.classList.toggle('hidden');
  //   mainNode.classList.toggle('hidden');
  // },

  renderUserTrips(traveler, allDestinations) {
    traveler.trips.forEach(trip => {
      bookedTripsBody.insertAdjacentHTML(`beforeend`, 
        `<p>Destination: ${allDestinations[trip.destinationID - 1].destination}</p>
        <p>Travelers: ${trip.travelers}</p>
        <p>Date: ${trip.date}</p>
        <p>Status: ${trip.status}</p>`
      );
    });
  }
}

export default domUpdates;