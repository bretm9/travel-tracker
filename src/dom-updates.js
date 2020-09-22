import nodes from './index'

let domUpdates = {

  toggleMainView() {
    nodes.loginView.classList.toggle('hidden');
    nodes.nav.classList.toggle('hidden');
    nodes.mainView.classList.toggle('hidden');
  },

  renderUserTrips(traveler, allDestinations) {
    nodes.bookedTripsBody.innerHTML = '';
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
          <input type="image" class="destination-image" id="${destination.id}" src="${destination.image}" alt="${destination.alt}"/>
        </article>`
      );
    });
  }, 

  selectionSuccess() {
    nodes.errorSection.innerHTML = '<h3>You successfully booked your trip (See the Booked Trips Section)</h3>'
  },
  
  selectionError() {
    nodes.errorSection.innerHTML = '<h3>Error! Please select a destination and type a date (YYYY/DD/MM)</h3>'
  }
}

export default domUpdates;