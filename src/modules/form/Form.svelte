<script>
	import Input from 'components/InputWithRange.svelte';
	import Message from 'src/components/Message.svelte';
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
		>
			{#if $rootFontSize <= 0}
				<Message id="root-font-size" type="error">Incorrect font size value.</Message>
			{/if}
		</Input>
	</li>
	<li>
		<Input id="min-size" unit="px" label="Min size" min={1} max={128} step={1} value={minSize}>
			{#if $minSize > $maxSize}
				<Message id="min-max-size" type="error">
					Fluid snippet doesn't have any effect. Minimum size is larger than maximum size.
				</Message>
			{/if}
		</Input>
	</li>
	<li>
		<Input id="max-size" unit="px" label="Max size" min={1} max={128} step={1} value={maxSize}>
			{#if $minSize > $maxSize}
				<Message id="min-max-size" type="error">
					Fluid snippet doesn't have any effect. Minimum size is larger than maximum size.
				</Message>
			{/if}
		</Input>
	</li>
	<li>
		<Input id="fluid-size" unit="vw" label="Fluid size" min={-5} max={5} value={fluidSize}>
			{#if $fluidSize === 0}
				<Message id="fluid-size" type="warning"
					>Fluid snippet doesn't have any effect. Fluid size should be above 0</Message
				>
			{/if}
		</Input>
	</li>
	<li>
		<Input
			id="relative-size"
			unit="rem"
			label="Relative size"
			min={1}
			max={5}
			step={0.25}
			value={relativeSize}
		>
			{#if $relativeSize < 1}
				<Message id="relative-size" type="warning"
					>Relative size should be at least 1 and more to support user font size settings without
					decreasing font size on zoom.</Message
				>
			{/if}
		</Input>
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

		@media (--mq-mobileLandscape-min) and (--mq-tablet-max) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}

		@media (--mq-desktop-min) and (--mq-desktop-max) {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
		}

		@media (--mq-heightLarge) {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
		}
	}

	.form-list li + li {
		margin-top: var(--spacing-1);

		@media (--mq-mobileLandscape-min) and (--mq-desktop-max) {
			margin-top: 0;
		}

		@media (--mq-heightLarge) {
			margin-top: 0;
		}
	}
</style>
