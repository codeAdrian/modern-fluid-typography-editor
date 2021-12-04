<script>
	import Form from 'modules/form/Form.svelte';
	import Graph from 'modules/graph/Graph.svelte';
	import Tabs from 'modules/tabs/Tabs.svelte';
	import Legend from 'src/components/Legend.svelte';
	import Snippet from 'src/components/Snippet.svelte';
	import Stats from 'src/components/Stats.svelte';
	import Section from 'src/modules/code/Section.svelte';
	import { clampValue } from 'src/modules/form/store';
	import { graphChangeEnd, graphChangeStart } from 'src/modules/graph/derived';
	import AddValue from 'src/modules/tracker/AddValue.svelte';
	import Tracker from 'src/modules/tracker/Tracker.svelte';
</script>

<main class="homepage">
	<aside class="homepage__aside">
		<Form />
	</aside>

	<section class="homepage__content">
		<Tabs tabs={['Graph', 'Custom points']} let:activeTab>
			{#if activeTab === 0}
				<Stats start={$graphChangeStart.x} end={$graphChangeEnd.x} />
				<Graph />
			{:else}
				<AddValue />
				<Tracker />
				<Legend />
			{/if}

			<Snippet text={$clampValue} slot="util" />
		</Tabs>

		<Section />
	</section>
</main>

<style>
	.homepage {
		display: grid;
		grid-template-columns: 250px auto;
		grid-gap: var(--spacing-2);
		padding: 0 var(--spacing-2);
	}
</style>
