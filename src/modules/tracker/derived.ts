import { derived } from 'svelte/store';
import { trackers } from './store';

export const trackersAsc = derived([trackers], ([$trackers]) => {
	const sorted = $trackers.sort((a, b) => a.width - b.width);
	return sorted;
});

export const trackersDesc = derived([trackersAsc], ([$trackersAsc]) => {
	return [...$trackersAsc].reverse();
});
