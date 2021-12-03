import type { ChartConfiguration } from 'chart.js';
import { externalTooltipHandler } from './customTooltip';

export const CHART_OPTIONS: ChartConfiguration<'line'> = {
	type: 'scatter',
	data: {
		datasets: [
			{
				borderColor: 'hsl(169, 82%, 69%)',
				tension: 0,
				showLine: true,
				lineTension: 0,
				interpolate: true,
				pointRadius: 0,
				borderWidth: 4,
				borderJoinStyle: 'round',
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
				line: {
					color: 'hsl(182, 29%, 51%)',
					width: 2
				},
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
				min: 300,
				suggestedMax: 1024,
				type: 'linear',
				title: {
					text: 'Viewport width (pixels)',
					display: true,
					color: 'hsl(215, 22%, 85%)',
					font: { size: 16, family: 'Ubuntu' }
				},
				grid: {
					drawTicks: false,
					lineWidth: 2,
					borderWidth: 2,
					color: 'hsla(182, 29%, 51%, 0.25)'
				},

				ticks: {
					stepSize: 1,
					count: 12,
					precision: 0,
					padding: 12,
					color: (c) =>
						c['tick']['value'] <= 1400 ? 'hsla(215, 22%, 85%, 0.6)' : 'hsla(308, 90%, 44%, 0.9)',
					font: { size: 16, weight: '800' }
				}
			},
			y: {
				min: 0,
				suggestedMin: 16,
				suggestedMax: 48,
				title: {
					text: 'Fluid size (pixels)',
					display: true,
					color: 'hsl(215, 22%, 85%)',
					font: { size: 16, family: 'Ubuntu' },
					padding: 8
				},
				grid: {
					drawTicks: false,
					lineWidth: 2,
					borderWidth: 2,
					color: 'hsla(182, 29%, 51%, 0.25)'
				},
				ticks: {
					padding: 12,
					font: { size: 16, weight: '800' },
					color: 'hsla(215, 22%, 85%, 0.6)',
					callback: function (value, index) {
						return index === 0 ? '' : value;
					}
				}
			}
		}
	}
};
