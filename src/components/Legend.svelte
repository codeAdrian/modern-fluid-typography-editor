<ul class="legend">
	<li class="legend__box legend__box--min">Min value</li>
	<li class="legend__box legend__box--fluid">Within min and max range</li>
	<li class="legend__box legend__box--max">Max value</li>
</ul>

<style>
	.legend {
		list-style: none;
		padding: 0;
		font-weight: var(--font-weight-bold);
		display: flex;
		align-items: baseline;
		margin: var(--spacing-1) 0;
	}

	.legend__box {
		display: flex;
		align-items: center;
		padding-right: var(--spacing-1);
	}

	.legend__box::before {
		content: '';
		display: inline-block;
		width: var(--spacing-1);
		height: var(--spacing-1);
		margin-right: var(--spacing-n2);
	}

	.legend__box--min::before {
		border: 2px solid var(--color-secondary);
		background-color: var(--color-secondary-faded);
	}

	.legend__box--fluid::before {
		border: 2px solid var(--color-gray-medium);
		background-color: var(--color-gray-medium-faded);
	}

	.legend__box--max::before {
		border: 2px solid var(--color-primary);
		background-color: var(--color-primary-faded);
	}
</style>
