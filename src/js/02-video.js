import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localKey = 'videoplayer-current-time';

function getTimePlay(data) {
  localStorage.setItem(localKey, data.seconds);
}

player.on('timeupdate', throttle(getTimePlay, 1000));

const getTime = JSON.parse(localStorage.getItem(localKey)) || 0;

player.setCurrentTime(getTime);

console.log('played the video!');
