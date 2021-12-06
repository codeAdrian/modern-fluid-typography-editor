<main>
	<div class="wrapper">
		<h1 class="title">
			<div class="title__text">Game over.<br /> Or is it?</div>
		</h1>
		<a class="notfound__link" href="/">Start again</a>
	</div>

	<div class="graphics" />
</main>

<style>
	main {
		position: relative;
		overflow: hidden;
		min-height: calc(100vh - 100px - var(--spacing-2));
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.wrapper {
		text-align: center;

		padding: 0 var(--spacing-n1);

		@media (--mq-tablet-min) {
			padding: 0 var(--spacing-2);
		}
	}

	.title {
		font-size: clamp(2rem, 6vw + 1rem, 32rem);
		line-height: 1.25;
		margin: 0;
	}

	.notfound__link {
		color: var(--color-secondary);
		background-color: var(--color-secondary-faded);
		border: 2px solid currentColor;
		padding: var(--spacing-1) var(--spacing-2);
		font-family: var(--font-family-primary);
		border-radius: var(--spacing-n2);
		text-decoration: none;
	}

	.notfound__link:hover,
	.notfound__link:active,
	.notfound__link:focus {
		box-shadow: 0 0 2px 1px var(--color-secondary);
	}

	.graphics {
		min-width: 200vw;
		height: 100%;
		position: absolute;
		left: -50%;
		transform: perspective(50vh) rotate3d(1, 0, 0, 70deg);
		background-image: repeating-linear-gradient(
				90deg,
				var(--color-secondary-faded) 0%,
				transparent 2px,
				transparent var(--spacing-2),
				var(--color-secondary-faded) calc(var(--spacing-2) + 2px)
			),
			repeating-linear-gradient(
				180deg,
				var(--color-secondary-faded) 0%,
				transparent 2px,
				transparent var(--spacing-2),
				var(--color-secondary-faded) calc(var(--spacing-2) + 2px)
			);
		z-index: var(--level-n1);
		animation: movement 0.7s linear infinite;
	}

	.title__text {
		width: fit-content;
		text-align: center;
		max-width: 10em;
		line-height: 1.2;
		margin-bottom: var(--spacing-4);
		text-shadow: 0 0 var(--spacing-n2) var(--color-primary-tint);
		animation: glow 2s infinite linear alternate;
	}

	@keyframes movement {
		0% {
			transform: perspective(50vh) rotate3d(1, 0, 0, 70deg) translate3d(0, -var(--spacing-2), 0);
		}
		100% {
			transform: perspective(50vh) rotate3d(1, 0, 0, 70deg) translate3d(0, var(--spacing-2), 0);
		}
	}

	@keyframes glow {
		0% {
			text-shadow: 0 0 0.1em var(--color-primary-tint);
		}
		100% {
			text-shadow: 0 0 0.25em var(--color-primary-tint);
		}
	}
</style>
