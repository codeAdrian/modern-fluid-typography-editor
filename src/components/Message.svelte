<script>
	import { computePosition } from '@floating-ui/dom';
	import { clickOutside } from 'src/utils/clickOutside';
	import { onMount } from 'svelte';

	export let type;
	export let id;

	// First, select the elements on the document
	let button;
	let tooltip;
	let showTooltip = false;

	onMount(() => {
		computePosition(button, tooltip, { placement: 'right' }).then(({ x, y }) => {
			Object.assign(tooltip.style, {
				left: `${x}px`,
				top: `${y}px`
			});
		});
	});

	const handleClickOutside = () => (showTooltip = false);
</script>

<div class="tooltip" use:clickOutside on:click_outside={handleClickOutside}>
	<button
		on:mouseenter={() => {
			showTooltip = true;
		}}
		on:mouseleave={() => {
			showTooltip = false;
		}}
		on:click={() => (showTooltip = true)}
		class="tooltip-button"
		bind:this={button}
	>
		<i class={`fa-solid fa-triangle-exclamation tooltip__icon tooltip__icon--${type}`} />
	</button>
	<div class="tooltip__message" bind:this={tooltip} class:tooltip__message--visible={showTooltip}>
		<div class="tooltip__message-inner">
			<slot />
		</div>
	</div>
</div>

<style>
	.tooltip {
		display: inline-block;
	}

	.tooltip-button {
		background-color: transparent;
		border-width: 0;
		cursor: help;
		padding: 0;
		margin-left: var(--spacing-n5);
	}

	.tooltip__icon {
		color: var(--color-tertiary);
	}

	.tooltip__message {
		position: absolute;
		display: none;
		z-index: var(--level-4);
		max-width: 250px;
		background-color: var(--color-gray-dark);
		border: 2px solid var(--color-tertiary);
		border-radius: var(--spacing-n2);
		margin-top: calc(-1 * var(--spacing-1));
		margin-left: var(--spacing-n1);
	}

	.tooltip__message::before {
		content: '\f0d9';
		font-family: 'Font Awesome 6 Free';
		font-weight: 900;
		position: absolute;
		color: var(--color-tertiary);
		font-size: var(--font-size-medium);
		left: 2px;
		top: 0;
		width: var(--spacing-n1);
		height: var(--spacing-n1);
		transform: translate3d(-100%, 50%, 0);

		z-index: var(--level-2);
	}

	.tooltip__message-inner {
		padding: var(--spacing-n1);
		background-color: var(--color-tertiary-faded);
		font-weight: var(--font-weight-bold);
	}

	.tooltip__message--visible {
		display: initial;
	}
</style>
