import { derived } from 'svelte/store';
import { fluidSize, maxSize, minSize, relativeSize, rootFontSize } from 'src/modules/form/store';
import { toPx } from 'src/utils/toPx';

export const graphChangeStart = derived(
	[rootFontSize, minSize, fluidSize, relativeSize],
	([$rootFontSize, $minSize, $fluidSize, $relativeSize]) => {
		const relativeSizePx = toPx($relativeSize, $rootFontSize);

		return Math.round((100 * ($minSize - relativeSizePx)) / $fluidSize);
	}
);

export const graphChangeEnd = derived(
	[rootFontSize, maxSize, fluidSize, relativeSize],
	([$rootFontSize, $maxSize, $fluidSize, $relativeSize]) => {
		const relativeSizePx = toPx($relativeSize, $rootFontSize);

		return Math.round((100 * ($maxSize - relativeSizePx)) / $fluidSize);
	}
);
