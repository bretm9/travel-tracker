import moment from 'moment';

class Traveler {
  constructor(travelerData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
  }

  getTotalSpentThisYear() {
    this.tripsThisYear = []
    this.trips.forEach(trip => {
      if (trip.date.includes('2020')) {
        this.tripsThisYear.push(trip);
      }
    });
    let rawTotalSpent = this.tripsThisYear.reduce((totalSpent, currentTrip) => {
      return totalSpent + +(currentTrip.tripCost);
    }, 0);
    return Number(rawTotalSpent).toFixed(2);
  }

  organizeTripsByDate() {
    this.trips.sort((tripA, tripB) => {
      let tripAComparison = 0;
      let tripBComparison = 1;
      if (moment(tripB.date, "YYYY-MM-DD").isBefore(tripA.date)) {
        tripAComparison = 2;
      }
      return tripAComparison - tripBComparison;
    });
  }

  getUserTrips(allTrips, allDestinations) {
    this.trips = allTrips.filter(trip => {
      return trip.userID === this.id;
    });
    this.allDestinations = allDestinations;
  }
}

export default Traveler;