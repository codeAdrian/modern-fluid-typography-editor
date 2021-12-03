<script>
	export let type;
</script>

{#if type == 'warning'}
	<div>Warning: <slot /></div>
{/if}

{#if type == 'error'}
	<div>Error: <slot /></div>
{/if}
