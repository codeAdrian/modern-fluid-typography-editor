import type { ChartConfiguration } from 'chart.js';

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const getValue = (x, min, max) => clamp((2 / 100) * x + 16, min, max);

export const CHART_OPTIONS: ChartConfiguration<'line'> = {
	type: 'scatter',
	data: {
		datasets: [
			{
				data: [0, 800, 1600, 2200].map((x) => ({ x, y: getValue(x, 32, 48) })),
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0,
				showLine: true,
				pointRadius: 2,
				lineTension: 0,
				interpolate: true
			}
		]
	},
	options: {
		animation: false,
		tooltips: {
			mode: 'interpolate',
			intersect: false,
			callbacks: {
				title: function (a, d) {
					return a[0].element.y.toFixed(2);
				},
				label: function (i, d) {
					return 'WOOP';
				}
			}
		},
		plugins: {
			legend: {
				display: false
			},
			crosshair: {
				zoom: { enabled: false },
				sync: { enabled: false }
			},
			tooltip: {
				mode: 'interpolate',
				intersect: false,
				callbacks: {
					title: function (a, d) {
						return Math.round(a[0].element.y);
					},
					label: function (i, d) {
						return 'WOOP';
					}
				}
			}
		},
		scales: {
			x: {
				min: 250,
				max: 2000,
				type: 'linear',
				grid: {
					display: false
				}
			},
			y: {
				min: 0,
				grid: {
					display: false
				}
			}
		}
	}
};
