export const getOrCreateTooltip = (chart) => {
	let tooltipEl = chart.canvas.parentNode.querySelector('#chart-tooltip');

	if (!tooltipEl) {
		tooltipEl = document.createElement('div');
		tooltipEl.id = 'chart-tooltip';
		tooltipEl.style.pointerEvents = 'none';
		tooltipEl.style.position = 'absolute';
		tooltipEl.style.transform = 'translate3d(0, 0, 0)';

		const span = document.createElement('span');
		tooltipEl.appendChild(span);
		chart.canvas.parentNode.appendChild(tooltipEl);
	}

	return tooltipEl;
};

export const externalTooltipHandler = (context) => {
	const { chart, tooltip } = context;
	const tooltipEl = getOrCreateTooltip(chart, tooltip);

	tooltipEl.style.opacity = tooltip.opacity === 0 ? 0 : 1;

	if (tooltip.body) {
		const titleLines = tooltip.title || [];
		let text;

		titleLines.forEach((title) => {
			text = document.createTextNode(title);
		});

		const tableRoot = tooltipEl.querySelector('span');

		while (tableRoot.firstChild) {
			tableRoot.firstChild.remove();
		}

		tableRoot.appendChild(text);
	}

	const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

	const isLeft = tooltip.caretX < chart.width / 2;

	if (isLeft) {
		tooltipEl.style.transform = 'translate3d(0,0,0)';
	} else {
		tooltipEl.style.transform = 'translate3d(-100%,0,0)';
	}

	tooltipEl.style.padding = '8px';
	tooltipEl.style.left = positionX + tooltip.caretX + 'px';
	tooltipEl.style.top = positionY + 'px';
};
