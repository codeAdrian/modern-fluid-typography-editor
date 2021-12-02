<script>
	import { Chart, registerables, Interaction } from 'chart.js';
	import { onMount } from 'svelte';
	import { CrosshairPlugin, Interpolate } from 'chartjs-plugin-crosshair';

	export let chartOptions;
	export let data;

	let canvas;
	let chart;

	const initChart = () => {
		Interaction.modes.interpolate = Interpolate;
		Chart.register(CrosshairPlugin, ...registerables);
		chart = new Chart(canvas?.getContext('2d'), chartOptions);
		var gradientFill = chart.ctx.createLinearGradient(0, 0, 0, chart.chartArea.height);
		gradientFill.addColorStop(0, 'hsla(230, 50%, 50%, 0.2)');
		gradientFill.addColorStop(0.75, 'hsla(210, 50%, 50%, 0)');
		chart.options.backgroundColor = gradientFill;

		chart.data.datasets[0].data = data;
		chart?.update();
	};
	$: {
		if (chart) {
			chart.data.datasets[0].data = data;
			chart?.update();
		}
	}

	onMount(initChart);
</script>

<canvas bind:this={canvas} />

<style>
	canvas {
		cursor: crosshair;
	}
</style>
