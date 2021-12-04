<script>
	import { setToPrecision } from 'src/utils/setToPrecision';
	import { fluidSize, maxSize, minSize, relativeSizePx, rootFontSize } from '../form/store';
	import { trackers } from './store';
	import { calculateSizeValue } from './utils';

	export let width;
	export let id;
	export let isAsc = false;

	$: sizeValue = calculateSizeValue(width, $fluidSize, $relativeSizePx, $minSize, $maxSize);

	const handleRemove = (e) => {
		const id = parseInt(e.currentTarget.dataset.id);

		if (!id || isNaN(id)) {
			return;
		}

		trackers.update((v) => v.filter((item) => item.id !== id));
	};
</script>

<tr
	class="data"
	class:data--asc={isAsc}
	class:data--desc={!isAsc}
	class:data--max={sizeValue === $maxSize}
	class:data--min={sizeValue === $minSize}
>
	<td>
		{width} px
	</td>
	<td>
		{sizeValue} px
	</td>
	<td>
		{setToPrecision(sizeValue / $rootFontSize, 3)}rem
	</td>
	<td>
		<button
			class="data__button"
			class:data__button--max={sizeValue === $maxSize}
			class:data__button--min={sizeValue === $minSize}
			on:click={handleRemove}
			data-id={id}><i class="fa-solid fa-trash-can" /></button
		>
	</td>
</tr>

<style>
	.data {
		padding: var(--spacing-n2) var(--spacing-1);
		background-color: var(--color-gray-medium-faded);
	}

	.data--max {
		background-color: var(--color-primary-faded);
	}

	:global(.data--asc.data:not(.data--min):not(.data--max)) + .data--max {
		border-top: 3px solid var(--color-primary-tint);
	}

	:global(.data--asc.data:not(.data--min):not(.data--max)) + .data--min {
		border-top: 3px solid var(--color-secondary-tint);
	}

	:global(.data--desc.data:not(.data--max):not(.data--min)) + .data--min {
		border-top: 3px solid var(--color-secondary-tint);
	}

	:global(.data--desc.data:not(.data--max):not(.data--min)) + .data--max {
		border-top: 3px solid var(--color-primary-tint);
	}

	.data--min {
		background-color: var(--color-secondary-faded);
	}

	.data--asc.data--min + :global(.data:not(.data--min)) {
		border-top: 3px solid var(--color-secondary-tint);
	}

	.data--desc.data--max + :global(.data:not(.data--max)) {
		border-top: 3px solid var(--color-primary-tint);
	}

	.data--desc.data--min + :global(.data:not(.data--min)) {
		border-top: 3px solid var(--color-secondary-tint);
	}

	.data--asc.data--max + :global(.data:not(.data--max)) {
		border-top: 3px solid var(--color-primary-tint);
	}

	.data__button {
		color: var(--color-gray-light);
		background: transparent;
		border-width: 0;
		cursor: pointer;
	}

	.data__button:hover,
	.data__button:active {
		color: var(--color-gray-lightest);
	}

	.data__button--min {
		color: var(--color-secondary-tint);
	}

	.data__button--min:hover,
	.data__button--min:active {
		color: var(--color-secondary);
	}

	.data__button--max {
		color: var(--color-primary-tint);
	}

	.data__button--max:hover,
	.data__button--max:active {
		color: var(--color-primary);
	}
</style>
