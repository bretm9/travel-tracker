import './css/base.scss';
import './css/booked-trips.scss';
import './css/login.scss';
import './css/mobile.scss';
import './css/nav.scss';
import './css/request-trips.scss';

import fetcher from './fetch';
import domUpdates from './dom-updates';
import Traveler from './traveler';
import moment from 'moment';

const userInputUsername = document.querySelector('#login-input-username');
const userInputPassword = document.querySelector('#login-input-password');
const loginView = document.querySelector('#login-view')
const loginButton = document.querySelector('.login-button');
const loginFooter = document.querySelector('#login-footer');
const nav = document.querySelector('#nav');
const mainView = document.querySelector('#main-view');
const bookedTripsBody = document.querySelector('#booked-trips-body');
const totalSpentBody = document.querySelector('#total-spent-body');
const destinationsBody = document.querySelector('#desinations-body');
const resetButton = document.querySelector('#reset-button');
const requestTripButton = document.querySelector('#request-trip-button');
const startDateInput = document.querySelector('#start-date-input')
const travelerQuantitySelection = document.querySelector('#traveler-quantity-selection');
const durationSelection = document.querySelector('#duration-selection');
const errorSection = document.querySelector('#error-section');

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

let traveler, userID, selectedDestination;

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