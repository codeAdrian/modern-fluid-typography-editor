<script>
	import Input from 'components/Input.svelte';
	import { fluidSize, maxSize, minSize, relativeSize, rootFontSize } from './store';
</script>

<aside>
	<Input
		id="root-font-size"
		unit="px"
		label="Root font size"
		min={1}
		value={rootFontSize}
		withRangeInput
	/>
	<Input id="min-size" unit="px" label="Min size" min={1} value={minSize} withRangeInput />
	<Input id="max-size" unit="px" label="Max size" min={1} value={maxSize} withRangeInput />
	<Input id="fluid-size" unit="vw" label="Fluid size" min={0} value={fluidSize} withRangeInput />
	<Input id="relative-size" unit="rem" label="Relative size" value={relativeSize} withRangeInput />
</aside>
