import { derived } from 'svelte/store';
import { fluidSize, maxSize, minSize, relativeSizePx } from 'src/modules/form/store';
import { clampRange } from 'src/utils/clampRange';

export const graphChangeStart = derived(
	[minSize, maxSize, fluidSize, relativeSizePx],
	([$minSize, $maxSize, $fluidSize, $relativeSizePx]) => {
		if ($minSize >= $maxSize) {
			return { x: 0, y: $minSize };
		}
		return { x: Math.round((100 * ($minSize - $relativeSizePx)) / $fluidSize), y: $minSize };
	}
);

export const graphChangeEnd = derived(
	[minSize, maxSize, fluidSize, relativeSizePx],
	([$minSize, $maxSize, $fluidSize, $relativeSizePx]) => {
		if ($minSize >= $maxSize) {
			return { x: 1900, y: $minSize };
		}
		return { x: Math.round((100 * ($maxSize - $relativeSizePx)) / $fluidSize), y: $maxSize };
	}
);

export const graphStart = derived(
	[minSize, maxSize, fluidSize, relativeSizePx, graphChangeStart],
	([$minSize, $maxSize, $fluidSize, $relativeSizePx, $graphChangeStart]) => {
		if ($minSize >= $maxSize) {
			return { x: 100, y: $minSize };
		}

		const x = Math.min($graphChangeStart.x - 100, 100);

		return {
			x,
			y: clampRange(($fluidSize / 100) * x + $relativeSizePx, $minSize, $maxSize)
		};
	}
);

export const graphEnd = derived(
	[minSize, maxSize, fluidSize, relativeSizePx, graphChangeEnd],
	([$minSize, $maxSize, $fluidSize, $relativeSizePx, $graphChangeEnd]) => {
		if ($minSize >= $maxSize) {
			return { x: 1800, y: $minSize };
		}

		const x = Math.max($graphChangeEnd.x + 100, 1800);

		return {
			x,
			y: clampRange(($fluidSize / 100) * x + $relativeSizePx, $minSize, $maxSize)
		};
	}
);

export const graphPoints = derived(
	[graphStart, graphChangeStart, graphChangeEnd, graphEnd],
	([$graphStart, $graphChangeStart, $graphChangeEnd, $graphEnd]) => {
		console.log(
			[$graphStart, $graphChangeStart, $graphChangeEnd, $graphEnd].sort((a, b) => a.x - b.x)
		);
		return [$graphStart, $graphChangeStart, $graphChangeEnd, $graphEnd].sort((a, b) => a.x - b.x);
	}
);
