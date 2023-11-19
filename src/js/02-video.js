import player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const Player = new player(iframe);

Player.on('play', getTimePlay);

function getTimePlay(data) {
  {
    duration: 61.857;
    percent: 0.049;
    seconds: 3.034;
  }
  console.log(localStorage);
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  localStorage.setCurrentTime(30.456);
  console.log('played the video!');
}

console.log(Player);

// Player.setCurrentTime()
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });

const throttle = require('lodash.throttle');
console.log(throttle);

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
