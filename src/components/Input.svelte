<script lang="ts">
	export let label;
	export let id;
	export let unit = '';
	export let value;
	export let withRangeInput = false;
</script>

<label class="input__label" for={id}>{label}</label>
<input type="number" bind:value={$value} {id} {...$$restProps} />
{unit}
{#if withRangeInput}
	<input type="range" list={`${id}-tickmarks`} bind:value={$value} {...$$restProps} />
{/if}

<style>
	.input__label {
		display: block;
	}
</style>
