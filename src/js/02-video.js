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
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  Player.setCurrentTime(data.seconds);
  console.log('played the video!');
}

throttle = require(getTimePlay, 1000);
