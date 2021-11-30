<script>
	import LineChart from 'components/LineChart.svelte';
	import { clampValue } from '../form/store';
	import { CHART_OPTIONS } from './consts';
	import { graphChangeEnd, graphChangeStart } from './derived';
</script>

<p style={`font-size: ${$clampValue}`}>
	{$graphChangeStart} px
</p>
<p>
	{$graphChangeEnd} px
</p>

<LineChart chartOptions={CHART_OPTIONS} />
