<script>
	import Form from 'modules/form/Form.svelte';
	import Graph from 'modules/graph/Graph.svelte';
	import Tabs from 'modules/tabs/Tabs.svelte';
	import Snippet from 'src/components/Snippet.svelte';
	import { clampValue } from 'src/modules/form/store';
</script>

<Form />

<Tabs tabs={['Graph', 'Custom points']} let:activeTab>
	{#if activeTab === 0}
		<Graph slot="0" />
	{:else}
		Second
	{/if}
</Tabs>

<Snippet>
	{$clampValue}
</Snippet>
