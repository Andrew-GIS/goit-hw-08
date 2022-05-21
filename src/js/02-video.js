import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('play', onPlay);
player.on('loaded', throttle(startAfterReload, 1000));

function onPlay() {
	let stoppedVideoTime = 0;
	player.getCurrentTime().then(function (seconds) {
		stoppedVideoTime = seconds;
		console.log(`Video stopped at ${seconds} second `);
		localStorage.setItem(LOCALSTORAGE_KEY, seconds);
	});
}

function startAfterReload() {
	const stopTimePoint = localStorage.getItem(LOCALSTORAGE_KEY);
	player.setCurrentTime(stopTimePoint).then(function (seconds) {
		console.log(`Video started from ${seconds} second `);
	});
}
