<script>
	import AddValue from './AddValue.svelte';
	import { trackersAsc, trackersDesc } from './derived';
	import Sort from './Sort.svelte';
	import TableDataRow from './TableDataRow.svelte';

	let isAsc = true;
	let isEditing = false;

	$: items = isAsc ? $trackersAsc : $trackersDesc;

	const handleClick = () => {
		isAsc = !isAsc;
	};
</script>

<article class="tracker-wrapper">
	<table class="tracker">
		<thead>
			<tr>
				<th>
					<button on:click={() => (isEditing = true)}>Add</button>
					Screen width
					<Sort {handleClick} />
				</th>
				<th colspan="2">Fluid size</th>
				<th />
			</tr>
		</thead>
		<tbody>
			{#if isEditing}
				<AddValue onAdd={() => (isEditing = false)} />
			{/if}
			{#key `${isAsc ? 'asc' : 'desc'}`}
				{#each items as item}
					<TableDataRow {isAsc} {...item} />
				{/each}
			{/key}
		</tbody>
	</table>
</article>

<style>
	.tracker-wrapper {
		border-radius: var(--spacing-n2);
		border: 2px solid var(--color-gray-light);
		max-height: 420px;
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
		padding: var(--spacing-n2) var(--spacing-1);
	}
</style>
