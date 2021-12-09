<script>
	import { shareUrl } from 'src/modules/form/store';
	import Clipboard from 'svelte-clipboard';

	let hasCopied = false;

	const handleCopyAnimation = () => {
		hasCopied = true;
		setTimeout(() => {
			hasCopied = false;
		}, 1000);
	};
</script>

<Clipboard on:copy={handleCopyAnimation} text={$shareUrl} let:copy>
	<button on:click={copy} href={$shareUrl} title="Share this value">
		{#if hasCopied}
			<i class="fa-solid fa-check" />
			Link copied
		{:else}
			<i class="fa-solid fa-share-from-square" />
			Copy link
		{/if}
	</button>
</Clipboard>

<style>
	button {
		cursor: pointer;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		color: var(--color-secondary);
		background-color: var(--color-secondary-faded);
		border: 2px solid currentColor;
		padding: var(--spacing-n1) var(--spacing-1);
		font-family: var(--font-family-primary);
		border-radius: var(--spacing-n2);
		text-decoration: none;
		min-width: 180px;
	}

	button i {
		padding-right: var(--spacing-n4);
	}

	button:hover,
	button:active,
	button:focus {
		box-shadow: 0 0 2px 1px var(--color-secondary);
	}
</style>
