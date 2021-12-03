<script>
	import Input from 'components/InputWithRange.svelte';
	import { fluidSize, maxSize, minSize, relativeSize, rootFontSize } from './store';
</script>

<ul class="form-list">
	<li>
		<Input
			id="root-font-size"
			unit="px"
			label="Root font size"
			min={1}
			max={64}
			value={rootFontSize}
		/>
	</li>
	<li>
		<Input id="min-size" unit="px" label="Min size" min={1} max={128} step={1} value={minSize} />
	</li>
	<li>
		<Input id="max-size" unit="px" label="Max size" min={1} max={128} step={1} value={maxSize} />
	</li>
	<li>
		<Input id="fluid-size" unit="vw" label="Fluid size" min={1} max={10} value={fluidSize} />
	</li>
	<li>
		<Input
			id="relative-size"
			unit="rem"
			label="Relative size"
			min={-2}
			max={2}
			step={0.25}
			value={relativeSize}
		/>
	</li>
</ul>

<style>
	.form-list {
		margin-bottom: var(--spacing-2);
		list-style: none;
		padding: 0;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: var(--spacing-2);
		border: 2px solid var(--color-secondary-tint);
		background: var(--color-secondary-faded);
		border-radius: var(--spacing-n2);
		padding: var(--spacing-1) var(--spacing-1) calc(var(--spacing-1) + var(--spacing-n2));
	}

	.form-list li + li {
		margin-top: var(--spacing-1);
	}
</style>
