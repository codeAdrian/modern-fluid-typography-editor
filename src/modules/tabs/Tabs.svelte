<script>
	export let tabs;

	let activeTab = 0;
</script>

{#each tabs as label, index}
	<button
		on:click={() => {
			activeTab = index;
		}}>{label}</button
	>
{/each}

<slot {activeTab} />
