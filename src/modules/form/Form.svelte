<script>
	import Input from 'components/Input.svelte';
	import { fluidSize, maxSize, minSize, relativeSize, rootFontSize } from './store';
</script>

<ul class="form-list">
	<li>
		<Input
			id="root-font-size"
			unit="px"
			label="Root font size"
			min={1}
			value={rootFontSize}
			withRangeInput
		/>
	</li>
	<li>
		<Input id="min-size" unit="px" label="Min size" min={1} value={minSize} withRangeInput />
	</li>
	<li>
		<Input id="max-size" unit="px" label="Max size" min={1} value={maxSize} withRangeInput />
	</li>
	<li>
		<Input id="fluid-size" unit="vw" label="Fluid size" min={1} value={fluidSize} withRangeInput />
	</li>
	<li>
		<Input
			id="relative-size"
			unit="rem"
			label="Relative size"
			min={-8}
			max={8}
			step={0.5}
			value={relativeSize}
			withRangeInput
		/>
	</li>
</ul>

<style>
	.form-list {
		list-style: none;
		padding: 0;
	}
</style>
