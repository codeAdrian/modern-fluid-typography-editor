import { getClampValue } from 'src/utils/getClampValue';
import { toPx } from 'src/utils/toPx';
import { toRem } from 'src/utils/toRem';
import { derived, writable } from 'svelte/store';

const rootFontSize = writable(16);
const minSize = writable(32);
const maxSize = writable(48);
const fluidSize = writable(3);
const relativeSize = writable(1);

const minSizeRem = derived([minSize, rootFontSize], toRem);
const maxSizeRem = derived([maxSize, rootFontSize], toRem);
const relativeSizePx = derived([relativeSize, rootFontSize], toPx);

const clampValue = derived([minSizeRem, fluidSize, relativeSize, maxSizeRem], getClampValue);

export {
	rootFontSize,
	minSize,
	maxSize,
	fluidSize,
	relativeSize,
	minSizeRem,
	maxSizeRem,
	clampValue,
	relativeSizePx
};
