import type { ChartConfiguration } from 'chart.js';
import { externalTooltipHandler } from './customTooltip';

export const CHART_OPTIONS: ChartConfiguration<'line'> = {
	type: 'scatter',
	data: {
		datasets: [
			{
				borderColor: 'rgb(75, 192, 192)',
				tension: 0,
				showLine: true,
				lineTension: 0,
				interpolate: true,
				pointRadius: 0,
				borderWidth: 4,
				borderJoinStyle: 'round',
				borderCapStyle: 'round',
				fill: true
			}
		]
	},
	options: {
		animation: false,
		responsive: true,
		plugins: {
			legend: {
				display: false
			},
			crosshair: {
				zoom: { enabled: false },
				sync: { enabled: false }
			},
			tooltip: {
				enabled: false,
				mode: 'interpolate',
				intersect: false,
				yAlign: 'bottom',
				external: externalTooltipHandler,
				callbacks: {
					title: function (a) {
						const { x, y } = a[0].element;
						return `${Math.round(y)}px at ${Math.round(x)}px`;
					},
					label: () => null
				}
			}
		},
		scales: {
			x: {
				min: 200,
				suggestedMax: 1024,
				type: 'linear',
				title: { text: 'Viewport width', display: true },
				grid: {
					drawTicks: false,
					borderDash: [16, 16],
					lineWidth: 2
				},

				ticks: {
					padding: 12,
					callback: function (value, index, values) {
						return value + 'px';
					}
				}
			},
			y: {
				min: 0,
				suggestedMin: 16,
				suggestedMax: 48,
				title: { text: 'Fluid size', display: true },
				grid: {
					display: false
				},
				ticks: {
					callback: function (value, index, values) {
						return value + 'px';
					}
				}
			}
		}
	}
};
