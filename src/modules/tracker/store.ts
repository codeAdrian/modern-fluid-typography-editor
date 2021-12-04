import { writable } from 'svelte/store';

export const trackers = writable([
	{ id: 10, width: 300 },
	{ id: 11, width: 360 },
	{ id: 12, width: 480 },
	{ id: 13, width: 568 },
	{ id: 14, width: 768 },
	{ id: 15, width: 920 },
	{ id: 16, width: 1024 },
	{ id: 17, width: 1280 },
	{ id: 18, width: 1440 }
]);
