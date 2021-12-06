<footer class="footer">
	<p class="footer__section">
		Inspired by
		<a
			class="footer__link footer__link--primary"
			href="https://www.joshwcomeau.com/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Josh Comeau's
		</a>
		"Fluid Calculator" from
		<a
			class="footer__link footer__link--primary"
			href="https://css-for-js.dev/"
			target="_blank"
			rel="noopener noreferrer"
		>
			CSS for JS devs
		</a> course.
	</p>
	<p class="footer__section">
		Created with <i class="fa-solid fa-heart footer__icon" /> and
		<i class="fa-solid fa-fire footer__icon" />
		by
		<a
			class="footer__link footer__link--secondary"
			href="http://codeadrian.github.io"
			target="_blank"
			rel="noopener noreferrer"
		>
			Adrian Bece
		</a>
	</p>
	<ul class="footer__links">
		<li class="footer__item">
			<a
				href="https://twitter.com/AdrianBeceDev"
				target="_blank"
				class="footer__link footer__link--social"
				rel="noopener noreferrer"
			>
				<i class="fa-brands fa-twitter" />
			</a>
		</li>
		<li class="footer__item">
			<a
				href="https://www.linkedin.com/in/adrianbece/"
				target="_blank"
				class="footer__link footer__link--social"
				rel="noopener noreferrer"
			>
				<i class="fa-brands fa-linkedin-in" />
			</a>
		</li>
		<li class="footer__item">
			<a
				href="https://github.com/codeAdrian"
				target="_blank"
				class="footer__link footer__link--social"
				rel="noopener noreferrer"
			>
				<i class="fa-brands fa-github-alt" />
			</a>
		</li>
		<li class="footer__item">
			<a
				href="https://www.buymeacoffee.com/ubnZ8GgDJ"
				target="_blank"
				class="footer__link footer__link--social"
				rel="noopener noreferrer"
			>
				<i class="fa-solid fa-mug-saucer" />
			</a>
		</li>
	</ul>
</footer>

<style>
	.footer {
		text-align: center;
		padding: var(--spacing-2) var(--spacing-n1);
		background-color: var(--color-gray-medium-faded);
		border-top: 2px solid var(--color-gray-medium);
		font-weight: var(--font-weight-bold);

		@media (--mq-tablet-min) {
			padding: var(--spacing-2);
		}
	}

	.footer__link {
		text-decoration: none;
		font-family: var(--font-family-primary);
	}

	.footer__link:hover,
	.footer__link:active {
		text-decoration: underline;
	}

	.footer__link--primary {
		color: var(--color-primary);
	}

	.footer__link--secondary {
		color: var(--color-secondary);
	}

	.footer__section + .footer__section {
		margin-top: var(--spacing-1);
	}

	.footer__link--social {
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
		color: var(--color-gray-light);
		background-color: var(--color-gray-medium-faded);
		border: 2px solid currentColor;
		width: calc(var(--spacing-1) + var(--spacing-n1));
		aspect-ratio: 1;
		font-family: var(--font-family-primary);
		border-radius: var(--spacing-n2);
	}

	.footer__link--social:hover,
	.footer__link--social:active,
	.footer__link--social:focus {
		box-shadow: 0 0 2px 1px var(--color-gray-light);
		text-decoration: none;
	}

	.footer__links {
		list-style: none;
		padding: 0;
		display: flex;
		justify-content: center;
		margin-top: var(--spacing-1);
	}

	.footer__item + .footer__item {
		margin-left: var(--spacing-n1);
	}
</style>
