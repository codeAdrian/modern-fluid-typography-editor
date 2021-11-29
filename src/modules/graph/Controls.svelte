<script>
	import Input from 'components/Input.svelte';
	import { maxResolution, minResolution } from './store';
</script>

<Input id="resolution-min" label="Min" value={minResolution} />
<Input id="resolution-max" label="Max" value={maxResolution} />
