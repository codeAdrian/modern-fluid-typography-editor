<script>
	import LineChart from 'components/LineChart.svelte';
	import { CHART_OPTIONS } from './consts';
	import Controls from './Controls.svelte';
</script>

<LineChart chartOptions={CHART_OPTIONS} />
<Controls />
