import './css/base.scss';
import fetcher from './fetch';
import domUpdates from './dom-updates';
import Traveler from './traveler'

let traveler;

let userID = 2;

let selectedDestination;

let userInputUsername = document.querySelector('#login-input-username');
let userInputPassword = document.querySelector('#login-input-password');
let loginButton = document.querySelector('.login-button');
let loginFooter = document.querySelector('#login-footer');
let bookedTripsBody = document.querySelector('#booked-trips-body');
let totalSpentBody = document.querySelector('#total-spent-body');
let destinationsBody = document.querySelector('#desinations-body');
let resetButton = document.querySelector('#reset-button');
let requestTripButton = document.querySelector('#request-trip-button');
let startDateInput = document.querySelector('#start-date-input')
let travelerQuantitySelection = document.querySelector('#traveler-quantity-selection');
let durationSelection = document.querySelector('#duration-selection');


let nodes = {
  userInputUsername, 
  userInputPassword,
  loginButton,
  loginFooter,
  bookedTripsBody,
  totalSpentBody,
  destinationsBody,
  resetButton,
  requestTripButton,
  startDateInput,
  travelerQuantitySelection,
  durationSelection
}

window.addEventListener('load', (event) => {
// loginButton.addEventListener('click', () => {
  // if (login(userInputUsername.value, userInputPassword)) {
    fetcher.getTravelerDestinations(traveler, userID, bookedTripsBody);
    // domUpdates.toggleMainView(loginNode, navNode, mainNode);
    // domUpdates.renderUserTrips(traveler, allDestinations, tripsNode);
  // }
});

window.addEventListener('click', selectDestination);

// resetButton.addEventListener('click', clearSelection);

requestTripButton.addEventListener('click', requestTrip);

function selectDestination(event) {
  if (event.target.classList.contains('destination-image')) {
    selectedDestination = parseInt(event.target.id);
  }
}

function requestTrip() {
  // if (this.inputCorrectFormat(selectedDate) && selectedDestination) {
    fetcher.postRequestedTrip(traveler, userID, nodes, selectedDestination);
  // } else {
  //   domUpdates.selectionError();
  // }
}

// function inputCorrectFormat(selectedDate) {

// }

// function login(username, password) {
//   let splitUsername = username.split('traveler');
//   if (splitUsername[0] === `traveler` 
//     && splitUsername[1] > 0 
//     && splitUsername[1] <= 50 
//     && password === 'travel2020'
//   ) {
//     this.toggleMainView();
//     return splitUsername[1];
//   } else if (splitUsername[0] === 'agent' 
//       && password === 'travel2020'
//     ) {
//     this.toggleMainView();
//     return splitUsername[0];
//   }
//   loginFooter.classList.remove('hidden');
//   return false;
// }

export default nodes;