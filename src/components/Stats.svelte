<script>
	import { fluidSize } from 'src/modules/form/store';

	export let start = 0;
	export let minValue = 0;
	export let end = 0;
	export let maxValue = 0;
</script>

<aside class="stats">
	{#if $fluidSize >= 0}
		Min value <strong class="stats__value--min">({minValue}px)</strong> ends at
		<strong class="stats__value--min"> {start} px</strong>. Max value
		<strong class="stats__value--max">({maxValue}px)</strong>
		starts at
		<strong class="stats__value--max"> {end} px</strong>.
	{:else}
		Max value <strong class="stats__value--min">({maxValue}px)</strong> ends at
		<strong class="stats__value--min"> {end} px</strong>. Min value
		<strong class="stats__value--max">({minValue}px)</strong>
		starts at
		<strong class="stats__value--max"> {start} px</strong>.
	{/if}
</aside>

<style>
	.stats {
		font-family: var(--font-family-primary);
		text-align: left;
	}

	.stats__value--min {
		color: var(--color-secondary);
	}

	.stats__value--max {
		color: var(--color-primary);
	}
</style>
