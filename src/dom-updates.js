import nodes from './index'

let domUpdates = {

  // toggleMainView(loginNode, navNode, mainNode) {
  //   loginNode.classList.toggle('hidden');
  //   navNode.classList.toggle('hidden');
  //   mainNode.classList.toggle('hidden');
  // },

  renderUserTrips(traveler, allDestinations) {
    traveler.trips.forEach(trip => {
      nodes.bookedTripsBody.insertAdjacentHTML(`beforeend`, 
      `<article class="section-sub-card" id="booked-trips-sub-card"></article>
        <p>Destination: ${allDestinations[trip.destinationID - 1].destination}</p>
        <p>Travelers: ${trip.travelers}</p>
        <p>Date: ${trip.date}</p>
        <p>Status: ${trip.status}</p>
      </article>`
      );
    });
  },

  renderTotalSpentThisYear(traveler) {
    nodes.totalSpentBody.insertAdjacentHTML('beforeend', 
      `<h3>You have spent $${traveler.getTotalSpentThisYear()} this year.</h3>`
      )
  }
}

export default domUpdates;