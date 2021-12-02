<script>
	import Form from 'modules/form/Form.svelte';
	import Graph from 'modules/graph/Graph.svelte';
	import Tabs from 'modules/tabs/Tabs.svelte';
	import Stats from 'src/components/Stats.svelte';
	import Section from 'src/modules/code/Section.svelte';
	import { graphChangeEnd, graphChangeStart } from 'src/modules/graph/derived';
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
				<Graph slot="0" />
			{:else}
				<Tracker slot="1" />
				<Stats start={$graphChangeStart.x} end={$graphChangeEnd.x} />
			{/if}
		</Tabs>

		<Section />
	</section>
</main>

<style>
	.homepage {
		display: flex;
		flex-wrap: wrap;
	}

	.homepage__aside {
		flex: 1 1 250px;
	}

	.homepage__content {
		flex: 1 0 70%;
	}
</style>
