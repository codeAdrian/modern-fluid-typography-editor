<script lang="ts">
	export let label;
	export let id;
	export let unit = '';
	export let value;
</script>

<label for={id}>{label}</label>
<input type="number" bind:value={$value} {id} {...$$restProps} />
{unit}

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
