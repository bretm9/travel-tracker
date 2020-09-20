import './css/base.scss';
import fetcher from './fetch';
import domUpdates from './dom-updates';
import Traveler from './traveler'
import moment from 'moment'

let traveler, userID;

let selectedDestination;

let userInputUsername = document.querySelector('#login-input-username');
let userInputPassword = document.querySelector('#login-input-password');
let loginView = document.querySelector('#login-view')
let loginButton = document.querySelector('.login-button');
let loginFooter = document.querySelector('#login-footer');
let nav = document.querySelector('#nav');
let mainView = document.querySelector('#main-view');
let bookedTripsBody = document.querySelector('#booked-trips-body');
let totalSpentBody = document.querySelector('#total-spent-body');
let destinationsBody = document.querySelector('#desinations-body');
let resetButton = document.querySelector('#reset-button');
let requestTripButton = document.querySelector('#request-trip-button');
let startDateInput = document.querySelector('#start-date-input')
let travelerQuantitySelection = document.querySelector('#traveler-quantity-selection');
let durationSelection = document.querySelector('#duration-selection');
let errorSection = document.querySelector('#error-section');

let nodes = {
  userInputUsername, 
  userInputPassword,
  loginView,
  loginButton,
  loginFooter,
  nav,
  mainView,
  bookedTripsBody,
  totalSpentBody,
  destinationsBody,
  resetButton,
  requestTripButton,
  startDateInput,
  travelerQuantitySelection,
  durationSelection,
  errorSection
}

// Accessibility branch eventListener:
// window.addEventListener('load', (event) => {
  // userID = 2;
//   fetcher.getTravelerDestinations(traveler, userID, bookedTripsBody);
// }

loginButton.addEventListener('click', () => {
  if (login(userInputUsername.value, userInputPassword.value)) {
    fetcher.getTravelerDestinations(traveler, userID, bookedTripsBody);
    domUpdates.toggleMainView();
  } else {
    loginFooter.classList.remove('hidden');
  }
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
  if (inputCorrectFormat(startDateInput) && selectedDestination) {
    fetcher.postRequestedTrip(traveler, userID, nodes, selectedDestination);
  } else {
    domUpdates.selectionError();
  }
}

function inputCorrectFormat(input) {
  return moment(input.value, 'YYYY/MM/DD',true).isValid()
}

function login(username, password) {
  let splitUsername = username.split('traveler');
  console.log(splitUsername)
  if (splitUsername[0] === ''
    && parseInt(splitUsername[1]) > 0 
    && parseInt(splitUsername[1]) <= 50 
    && password === 'travel2020'
  ) {
    userID = parseInt(splitUsername[1]);
    return true;
  // } else if (splitUsername[0] === 'agent' 
  //     && password === 'travel2020'
  //   ) {
  //   // return true;
  }
  loginFooter.classList.remove('hidden');
  return false;
}

export default nodes;