<script>
	import { Chart, registerables, Interaction } from 'chart.js';
	import { onMount } from 'svelte';
	import { CrosshairPlugin, Interpolate } from 'chartjs-plugin-crosshair';

	export let chartOptions;

	let canvas;
	const initChart = () => {
		Interaction.modes.interpolate = Interpolate;
		Chart.register(CrosshairPlugin, ...registerables);
		new Chart(canvas?.getContext('2d'), chartOptions);
	};

	onMount(initChart);
</script>

<canvas width="800px" bind:this={canvas} />
