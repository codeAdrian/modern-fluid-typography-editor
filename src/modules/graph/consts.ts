import type { ChartConfiguration } from 'chart.js';

export const CHART_OPTIONS: ChartConfiguration<'line'> = {
	type: 'line',
	data: {
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
		datasets: [
			{
				label: 'My First Dataset',
				data: [65, 59, 80, 81, 56, 55, 40, 60, 52, 70],
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1
			}
		]
	}
};
