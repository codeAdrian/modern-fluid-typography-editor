import { writable } from 'svelte/store';

export const trackers = writable([
	{ id: 0, width: 300 },
	{ id: 1, width: 360 },
	{ id: 2, width: 480 },
	{ id: 3, width: 568 },
	{ id: 4, width: 768 },
	{ id: 5, width: 920 },
	{ id: 6, width: 1024 },
	{ id: 7, width: 1280 },
	{ id: 8, width: 1440 }
]);
