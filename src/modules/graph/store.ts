import { writable } from 'svelte/store';

const minResolution = writable(300);
const maxResolution = writable(1920);

export { minResolution, maxResolution };
