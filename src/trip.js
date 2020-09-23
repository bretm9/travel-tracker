class Trip {
  constructor(tripData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities;
  }
  
  getTripCost(allDestinations) {
    let currentDestination = allDestinations.find(destination => {
      return destination.id === this.destinationID;
    });
    let totalFlightCost = this.travelers * currentDestination.estimatedFlightCostPerPerson;
    let totalLodgingCost = this.duration * currentDestination.estimatedLodgingCostPerDay;
    let rawTripCost = (totalFlightCost + totalLodgingCost) * 1.1;
    this.tripCost = Number(rawTripCost).toFixed(2)
  }
}

export default Trip;