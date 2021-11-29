<script>
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';

	export let chartOptions;

	let canvas;

	const initChart = () => {
		new Chart(canvas?.getContext('2d'), chartOptions);
	};

	onMount(initChart);
</script>

<canvas bind:this={canvas} />
