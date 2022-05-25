import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onPlay, 1000));
player.on('loaded', updateTime);

function onPlay() {
 player.getCurrentTime().then(function(seconds) {
	 localStorage.setItem(LOCALSTORAGE_KEY, seconds);
	//  console.log('seconds :>> ', seconds);
    })
}

function updateTime() {
    const savedTime = localStorage.getItem(LOCALSTORAGE_KEY)
    player.setCurrentTime(savedTime).then(function (seconds) { 
        console.log(`Video stopped at ${seconds}`);
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;
        }
    })
}