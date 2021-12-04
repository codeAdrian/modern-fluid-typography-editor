<script>
	import AddValue from 'src/modules/tracker/AddValue.svelte';
</script>

<main>
	<h1 class="title">
		<div class="title__text">Fluid typography rocks! Use it wisely.</div>
		<div class="graphics" />
	</h1>
	<section class="intro">
		<p>
			For the past few days, I was going through Josh Comeau's
			<a href="https://css-for-js.dev/" target="_blank" rel="noopener noreferrer">
				CSS for JS devs
			</a>
			course. It's one of the best courses about CSS in general, I reccomend checking it out. In one
			of the lessions, I saw Josh's implementation of the fluid typography editor, used mainly for demonstration
			purposes.
		</p>
		<p>
			I saw an opportunity for building upon this idea and developing a fully-fledged tool that
			developers could use on day-to-day basis to fine-tune and keep track of their fluid
			typography.
		</p>
	</section>

	<section>
		<h2>CSS clamp and browser support</h2>
		<p>
			This editor relies heavily on <a
				href="https://caniuse.com/?search=clamp()"
				target="_blank"
				rel="noopener noreferrer"
				>CSS clamp
			</a> and generates code using this property. Although this property has a solid browser support
			(above 90% of globally used browsers), you might want to use a polyfill or a fallback value for
			unsupported browsers like Internet Explorer.
		</p>
	</section>

	<section>
		<h2>Terminology</h2>
		<pre>
			<code>
				clamp(min-value, fluid-value + relative-value, max-value);
			</code>
		</pre>

		<dl>
			<dt>min-value &amp; max-value</dt>
			<dd>Minimum and maximum value constraints for the final value.</dd>

			<dt>fluid-value</dt>
			<dd>
				Change speed (rate). If value is positive, the final value will increase from minimum value
				to maximum value as screen width increases. If this value is negative, the final value will
				decrease from maximum value to minimal value as screen width incrases.
			</dd>
			<dt>relative-size</dt>
			<dd>
				Browser default root font size is 16px. This value can be changed by users in their browser
				settings, usually for accessibility purposes. Positive or negative "rem" value should be
				included to avoid locking font size to px value and to support user font size preferences.
			</dd>
		</dl>
	</section>

	<section>
		<h2>Features</h2>
		<ul>
			<li>Adjust size constraints, rate and relative size</li>
			<li>Adapts to any root font size</li>
			<li>Graphical overview of the final fluid values</li>
			<li>Table view for keeping track of values on fixed screen width sizes.</li>
		</ul>
		<h3>Editor</h3>
		<h3>Code snippet</h3>
		<h3>Graph view</h3>
		<h3>Table view</h3>
	</section>

	<section>
		<h2>Issues and Contribution</h2>
	</section>
</main>

<style>
	main {
		font-size: var(--font-size-medium);
	}

	.title {
		font-size: clamp(2rem, 6vw + 1rem, 32rem);
		line-height: 1.25;
		min-height: calc(100vh - 100px - var(--spacing-2));
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0;
		position: relative;
		overflow: hidden;
		margin-bottom: var(--spacing-2);
	}

	.graphics {
		position: absolute;
		left: 0;
		margin-left: -50%;
		width: 200vw;
		height: 100%;
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
		transform: perspective(50vh) rotate3d(1, 0, 0, 70deg);
		animation: movement 0.7s infinite linear;
		z-index: -2;
	}

	.title__text {
		max-width: 10em;
		margin-bottom: var(--spacing-4);
		text-shadow: 0 0 var(--spacing-n2) var(--color-primary-tint);
		animation: glow 2s infinite linear alternate;
	}

	h2 {
		font-size: var(--font-size-large);
		margin-bottom: var(--spacing-1);
	}

	h3 {
		font-size: var(--font-size-medium);
	}

	dt {
		color: var(--color-secondary);
		font-family: var(--font-family-mono);
		margin-top: var(--spacing-1);
		margin-bottom: var(--spacing-n2);
	}

	a {
		color: var(--color-secondary);
		text-decoration: none;
		font-weight: var(--font-weight-bold);
	}

	pre {
		display: inline-block;
		border: 2px solid var(--color-secondary);
		background-color: var(--color-secondary-faded);
		border-radius: var(--spacing-n2);
		padding: var(--spacing-1);
		font-weight: var(--font-weight-bold);
		margin-bottom: var(--spacing-n1);
	}

	section {
		max-width: 768px;
		margin: 0 auto;
	}

	section + section {
		margin-top: var(--spacing-2);
	}

	p + p {
		margin-top: var(--spacing-1);
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
