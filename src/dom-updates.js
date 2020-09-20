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
          <hr>
        </article>`
      );
    });
  },

  renderTotalSpentThisYear(traveler) {
    nodes.totalSpentBody.innerHTML = `<h1>Total spent this year: $${traveler.getTotalSpentThisYear()}</h1>`;
  },

  renderDesinationCards(traveler) {
    traveler.allDestinations.forEach(destination => {
      nodes.destinationsBody.insertAdjacentHTML('beforeend',
        `<article class="sub-sub-card" id="desinations-sub-card">
          <h3>${destination.destination}</h3>
          <img class="destination-image" id="${destination.id}"src="${destination.image}" alt="${destination.alt}">
        </article>`
      );
    });
  }
}

export default domUpdates;