<ul class="legend">
	<li class="legend__box legend__box--min">Min value</li>
	<li class="legend__box legend__box--fluid">Within min and max range</li>
	<li class="legend__box legend__box--max">Max value</li>
</ul>

<style>
	.legend {
		list-style: none;
		padding: var(--spacing-1);
		font-weight: var(--font-weight-bold);
		border: 2px solid var(--color-gray-medium);
		border-radius: var(--spacing-n4);
		background-color: var(--color-gray-medium-faded);
		margin-top: var(--spacing-1);

		@media (--mq-desktop-min) {
			display: inline-block;
			width: auto;
			margin-top: 0;
		}
	}

	.legend__box {
		display: flex;
		align-items: center;
	}

	.legend__box + .legend__box {
		margin-top: var(--spacing-1);
	}

	.legend__box::before {
		content: '';
		display: inline-block;
		width: var(--spacing-1);
		height: var(--spacing-1);
		margin-right: var(--spacing-n2);
	}

	.legend__box--fluid::before {
		border: 2px solid var(--color-gray-light);
		background-color: var(--color-gray-medium-faded);
	}

	.legend__box--min::before {
		border: 2px solid var(--color-secondary);
		background-color: var(--color-secondary-faded);
	}

	.legend__box--max::before {
		border: 2px solid var(--color-primary);
		background-color: var(--color-primary-faded);
	}
</style>
