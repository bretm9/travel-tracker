import './css/base.scss';
import fetcher from './fetch';
import domUpdates from './dom-updates';
import Traveler from './traveler'

let traveler;

let userID = 1;

let userInputUsername = document.querySelector('#login-input-username');
let userInputPassword = document.querySelector('#login-input-password');
let loginButton = document.querySelector('.login-button');
let loginFooter = document.querySelector('#login-footer');
let bookedTripsBody = document.querySelector('#booked-trips-body');

window.addEventListener('load', (event) => {
// loginButton.addEventListener('click', () => {
  // if (login(userInputUsername.value, userInputPassword)) {
    fetcher.getTravelerDestinations(traveler, userID, bookedTripsBody)
    // domUpdates.toggleMainView(loginNode, navNode, mainNode);
    // domUpdates.renderUserTrips(traveler, allDestinations, tripsNode);
  // }
});

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

export default bookedTripsBody;