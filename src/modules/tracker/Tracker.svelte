<script>
	import { setToPrecision } from 'src/utils/setToPrecision';
	import { fluidSize, maxSize, minSize, relativeSizePx, rootFontSize } from '../form/store';
	import { trackersAsc, trackersDesc } from './derived';

	import { trackers } from './store';

	import { calculateSizeValue, generateUniqueId } from './utils';

	let screenWidth;
	let isAsc = true;

	$: items = isAsc ? $trackersAsc : $trackersDesc;

	const handleSubmit = (e) => {
		e.preventDefault();
		const id = generateUniqueId();
		if (screenWidth <= 0) {
			return;
		}

		trackers.update((v) => [...v, { id, width: screenWidth }]);
	};

	const handleClick = () => {
		isAsc = !isAsc;
	};

	const handleRemove = (e) => {
		const id = parseInt(e.currentTarget.dataset.id);

		if (!id || isNaN(id)) {
			return;
		}

		trackers.update((v) => v.filter((item) => item.id !== id));
	};
</script>

<form on:submit={handleSubmit}>
	<input type="number" min={0} required bind:value={screenWidth} />
	<button type="submit">Add</button>
</form>

<table>
	<thead>
		<tr>
			<th
				>Screen width
				<button on:click={handleClick}> Toggle </button>
			</th>
			<th colspan="2">Fluid size</th>
			<th />
		</tr>
	</thead>
	<tbody>
		{#key `${isAsc ? 'asc' : 'desc'}`}
			{#each items as { width, id }}
				<tr>
					<td>
						{width}px
					</td>
					<td>
						{calculateSizeValue(width, $fluidSize, $relativeSizePx, $minSize, $maxSize)}px
					</td>
					<td>
						{setToPrecision(
							calculateSizeValue(width, $fluidSize, $relativeSizePx, $minSize, $maxSize) /
								$rootFontSize,
							3
						)}rem
					</td>
					<td>
						<button on:click={handleRemove} data-id={id}>Remove</button>
					</td>
				</tr>
			{/each}
		{/key}
	</tbody>
</table>
