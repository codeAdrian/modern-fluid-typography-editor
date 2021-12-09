import { getClampValue } from 'src/utils/getClampValue';
import { getShareUrl } from 'src/utils/getShareUrl';
import { parseQueryString } from 'src/utils/parseQueryString';
import { toPx } from 'src/utils/toPx';
import { toRem } from 'src/utils/toRem';
import { derived, writable } from 'svelte/store';

const rootFontSize = writable(parseQueryString('rootFontSize') || 16);
const minSize = writable(parseQueryString('minSize') || 24);
const maxSize = writable(parseQueryString('maxSize') || 36);
const fluidSize = writable(parseQueryString('fluidSize') || 2);
const relativeSize = writable(parseQueryString('relativeSize') || 1);

const minSizeRem = derived([minSize, rootFontSize], toRem);
const maxSizeRem = derived([maxSize, rootFontSize], toRem);
const relativeSizePx = derived([relativeSize, rootFontSize], toPx);

const clampValue = derived([minSizeRem, fluidSize, relativeSize, maxSizeRem], getClampValue);

const shareUrl = derived([rootFontSize, minSize, fluidSize, relativeSize, maxSize], getShareUrl);

export {
	rootFontSize,
	minSize,
	maxSize,
	fluidSize,
	relativeSize,
	minSizeRem,
	maxSizeRem,
	clampValue,
	relativeSizePx,
	shareUrl
};
