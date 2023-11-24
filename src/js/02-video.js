import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localKey = 'videoplayer-current-time';

function getTimePlay(data) {
  localStorage.setItem(localKey, data.seconds);
}

player.on('timeupdate', throttle(getTimePlay, 1000));

const getTime = localStorage.getItem(localKey);
player.setCurrentTime(getTime);

console.log('played the video!');
