<script>
	export let tabs;

	let activeTab = 0;
</script>

<nav class="tabs">
	{#each tabs as label, index}
		<button
			class="tab__button"
			on:click={() => {
				activeTab = index;
			}}>{label}</button
		>
	{/each}
</nav>

<slot {activeTab} />

<style>
	.tab__button {
		background: transparent;
		border-width: 0;
		padding: var(--spacing-n1) var(--spacing-1) var(--spacing-n1) 0;
		color: var(--color-gray-light);
		border-bottom: 2px solid currentColor;
		font-size: var(--font-size-medium);
		font-family: var(--font-family-primary);
		cursor: pointer;
	}
</style>
