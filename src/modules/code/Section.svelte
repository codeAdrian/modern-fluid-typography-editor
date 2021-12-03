<script>
	import Message from 'components/Message.svelte';
	import { clampValue, minSize, maxSize, relativeSize } from 'src/modules/form/store';
</script>

{#if $minSize >= $maxSize}
	<Message type="error">
		Fluid snippet doesn't have any effect. Minimum size is larger than maximum size.
	</Message>
{/if}

{#if $relativeSize > -1 && $relativeSize < 1}
	<Message type="warning"
		>It's recommended to set "Relative Size" to a value -1 or less or 1 and greater to support user
		font size preferences.</Message
	>
{/if}
