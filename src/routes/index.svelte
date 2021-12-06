<script>
	import Form from 'modules/form/Form.svelte';
	import Graph from 'modules/graph/Graph.svelte';
	import Tabs from 'modules/tabs/Tabs.svelte';
	import Legend from 'src/components/Legend.svelte';
	import Snippet from 'src/components/Snippet.svelte';
	import Stats from 'src/components/Stats.svelte';
	import { clampValue, maxSize, minSize } from 'src/modules/form/store';
	import { graphChangeEnd, graphChangeStart } from 'src/modules/graph/derived';
	import AddValue from 'src/modules/tracker/AddValue.svelte';
	import Tracker from 'src/modules/tracker/Tracker.svelte';
</script>

<main class="homepage">
	<aside class="homepage__aside">
		<Form />
	</aside>

	<section class="homepage__content">
		<Tabs tabs={['Graph', 'Table']} let:activeTab>
			{#if activeTab === 0}
				<Stats
					minValue={$minSize}
					maxValue={$maxSize}
					start={$graphChangeStart.x}
					end={$graphChangeEnd.x}
				/>
				<Graph />
			{:else}
				<AddValue />
				<article class="homepage__wrapper">
					<Tracker />
					<Legend />
				</article>
			{/if}

			<Snippet text={$clampValue} slot="util" />
		</Tabs>
	</section>
</main>

<style>
	.homepage {
		grid-template-columns: 250px auto;
		grid-gap: var(--spacing-4);
		padding: 0 var(--spacing-n1);
		margin: 0 auto var(--spacing-2);
		max-width: var(--container-max);
		width: 100%;

		@media (--mq-tablet-min) {
			padding: 0 var(--spacing-2);
		}

		@media (--mq-desktopLarge-min) {
			display: grid;
		}

		@media (--mq-heightLarge) {
			display: revert;
		}
	}

	.homepage__wrapper {
		grid-template-columns: 520px 320px;
		grid-gap: var(--spacing-2);
		align-items: flex-start;

		@media (--mq-desktop-min) {
			display: grid;
		}
	}
</style>
