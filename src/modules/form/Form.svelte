<script>
	import Input from 'components/Input.svelte';
	import { fluidSize, maxSize, minSize, relativeSize, rootFontSize } from './store';
</script>

<aside>
	<Input id="root-font-size" unit="px" label="Root font size" min={1} value={rootFontSize} />
	<Input id="min-size" unit="px" label="Min size" min={1} value={minSize} />
	<Input id="max-size" unit="px" label="Max size" min={1} value={maxSize} />
	<Input id="fluid-size" unit="vw" label="Fluid size" min={0} value={fluidSize} />
	<Input id="relative-size" unit="rem" label="Relative size" value={relativeSize} />
</aside>
