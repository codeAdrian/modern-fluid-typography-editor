export const getOrCreateTooltip = (chart) => {
	let tooltipEl = chart.canvas.parentNode.querySelector('#chart-tooltip');

	if (!tooltipEl) {
		tooltipEl = document.createElement('div');
		tooltipEl.id = 'chart-tooltip';
		tooltipEl.style.pointerEvents = 'none';
		tooltipEl.style.position = 'absolute';
		tooltipEl.style.top = '0px';
		tooltipEl.style.border = '2px solid var(--color-secondary-tint)';
		tooltipEl.style.color = 'var(--color-secondary)';
		tooltipEl.style.background = 'var(--color-secondary-faded)';
		tooltipEl.style.fontWeight = 'var(--font-weight-bold)';
		tooltipEl.style.fontSize = 'var(--font-size-small)';
		tooltipEl.style.padding = 'var(--spacing-n2)';
		tooltipEl.style.lineHeight = '1';
		tooltipEl.style.textAlign = 'center';

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
		tooltipEl.style.transform = 'translate3d(-1px,calc(-50% + 3px),0)';
		tooltipEl.style.borderRadius = '4px 4px 4px 0';
	} else {
		tooltipEl.style.transform = 'translate3d(calc(-100% + 1px),calc(-50% + 3px),0)';
		tooltipEl.style.borderRadius = '4px 4px 0 4px';
	}

	tooltipEl.style.top = '0';

	tooltipEl.style.left = positionX + tooltip.caretX + 'px';
	tooltipEl.style.minWidth = '20ch';
	tooltipEl.style.top = positionY + 'px';
};
