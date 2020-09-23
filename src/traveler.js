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
}

export default Traveler;