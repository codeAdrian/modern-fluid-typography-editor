<script>
	import LineChart from 'components/LineChart.svelte';
	import { CHART_OPTIONS } from './consts';
	import { graphPoints } from './derived';
</script>

<LineChart data={$graphPoints} chartOptions={CHART_OPTIONS} />
