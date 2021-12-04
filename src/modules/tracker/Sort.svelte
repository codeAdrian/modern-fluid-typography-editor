<script>
	export let handleClick;
	export let isAsc;
</script>

<button class="sort" class:sort--desc={!isAsc} class:sort--asc={isAsc} on:click={handleClick}>
	{#if isAsc}
		<i class="fa-solid fa-arrow-up" />
	{:else}
		<i class="fa-solid fa-arrow-down" />
	{/if}
</button>

<style>
	.sort {
		margin-left: calc(-1 * var(--spacing-n5));
		border: 2px solid currentColor;
		background-color: transparent;
		border-radius: var(--spacing-n4);
		padding: var(--spacing-n4) var(--spacing-n3);
		margin-right: var(--spacing-n4);
	}

	.sort--asc {
		color: var(--color-secondary);
	}

	.sort--desc {
		color: var(--color-primary);
	}
</style>
