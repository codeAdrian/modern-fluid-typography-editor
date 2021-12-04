<script>
	import { trackersAsc, trackersDesc } from './derived';
	import Sort from './Sort.svelte';
	import TableDataRow from './TableDataRow.svelte';

	let isAsc = true;

	$: items = isAsc ? $trackersAsc : $trackersDesc;

	const handleClick = () => {
		isAsc = !isAsc;
	};
</script>

<div class:tracker-wrapper--overflow={items.length > 10} class="tracker-wrapper">
	<table class="tracker">
		<thead>
			<tr>
				<th>
					<Sort {isAsc} {handleClick} />
					Screen width
				</th>
				<th colspan="2">Fluid size</th>
				<th />
			</tr>
		</thead>
		<tbody>
			{#key `${isAsc ? 'asc' : 'desc'}`}
				{#each items as item}
					<TableDataRow {isAsc} {...item} />
				{/each}
			{/key}
		</tbody>
	</table>
</div>

<style>
	.tracker-wrapper {
		border-radius: var(--spacing-n5);
		border: 3px solid var(--color-gray-light);
	}

	.tracker-wrapper--overflow {
		max-height: 486px;
		overflow: auto;
	}

	.tracker {
		border-collapse: collapse;
		font-weight: 700;
		width: 100%;
	}

	.tracker thead {
		position: sticky;
		top: 0;
		background-color: var(--color-gray-dark);
	}

	.tracker :global(th) {
		text-align: left;
		font-family: var(--font-family-primary);
	}

	.tracker :global(th),
	.tracker :global(td) {
		line-height: 1;
		padding: var(--spacing-n1) var(--spacing-1);
	}
</style>
