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
    return this.tripsThisYear.reduce((totalSpent, currentTrip) => {
      let currentDestination = this.allDestinations.find(destination => {
        return destination.id === currentTrip.destinationID;
      });
      let totalFlightCost = currentTrip.travelers * currentDestination.estimatedFlightCostPerPerson;
      let totalLodgingCost = currentTrip.duration * currentDestination.estimatedLodgingCostPerDay;
      return totalSpent + ((totalFlightCost + totalLodgingCost) * 1.1);
    }, 0);
  }
}

export default Traveler;