<script>
	import Image from 'svimg';
</script>

<main>
	<h1 class="title">
		<div class="title__text">About the project &amp; user guide</div>
		<div class="graphics" />
	</h1>
	<section class="intro">
		<p>
			I was going through Josh Comeau's <a
				href="https://css-for-js.dev/"
				target="_blank"
				rel="noopener noreferrer"
			>
				CSS for JS devs
			</a>course which is one of the best courses on CSS in general and I recommend checking it out.
			In one of the lessions, Josh implemented a simple fluid typography editor, mainly for
			demonstration purposes to showcase how fluid typography changes depending on the screen size.
		</p>
		<p>
			I saw an opportunity for doing a <strong>really fun and useful project</strong>. I set out to
			build upon Josh's concept and developed a fully-fledged tool that developers could use on a
			day-to-day basis to fine-tune and keep track of their fluid typography and help to keep fluid
			typography behavior consistent across the significant breakpoints.
		</p>
	</section>

	<section>
		<h2>Fluid typography</h2>
		<p>
			Fluid typography is a modern way of approaching responsive typography. Instead of setting
			fixed typography values for individual screen sizes, we can set a single fluid value and let
			the CSS render the appropriate values for a specific screen size constrained by minimum and
			maximum values.
		</p>

		<p>
			Try resizing the screen and notice how the "About the project & user guide" adapts to screen
			size, but is constrained at some specific minimum and maximum value. Cool, isn't it?
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
			(above 90% of globally used browsers), you might want to use a polyfill or a fallback value if
			you need to support legacy browsers like Internet Explorer.
		</p>
	</section>

	<section>
		<h2>Configurable values</h2>
		<pre>
			<code>
				clamp(min-value, fluid-value + relative-value, max-value);
			</code>
		</pre>

		<dl>
			<dt>min-value &amp; max-value</dt>
			<dd>Minimum and maximum value constraints.</dd>

			<dt>fluid-value</dt>
			<dd>
				Change speed (rate). If a value is positive, the final value will increase from minimum
				value to maximum value as screen width increases. If this value is negative, the final value
				will decrease from maximum value to minimal value as screen width increases.
			</dd>
			<dt>relative-size</dt>
			<dd>
				Browser default root font size is 16px. This value can be changed by users in their browser
				settings, usually for accessibility purposes. Positive or negative "rem" values should be
				included to avoid locking font size to px value and to support user font size preferences.
			</dd>
		</dl>
	</section>

	<section>
		<h2>Features</h2>
		<p>Here is a short overview of some of the features of this editor:</p>
		<ul>
			<li>Adjust size constraints, rate, and relative size</li>
			<li>Adapts to any root font size</li>
			<li>Graphical overview of the final fluid values</li>
			<li>Table view for keeping track of values on fixed screen width sizes.</li>
		</ul>
		<h3>Adjusting fluid settings</h3>
		<p>
			Fluid typography settings can be easily adjusted either by using numerical inputs for more
			precise inputs or using range inputs for fine-tuning and smaller changes to easily track
			changes on the graph or table.
		</p>
		<figure>
			<Image src="images/editor.png" alt="Editor with text inputs with sample values set" />
			<figcaption>
				Use editor to configure min and max constraints, change rate and direction and relative
				sizing for user font preferences
			</figcaption>
		</figure>
		<h3>Code snippet</h3>
		<p>
			Based on the configured fluid settings, a CSS <code>clamp</code> code is generated. You can easily
			copy the value by clicking the button on the left side or by selecting the value and copying it
			manually.
		</p>
		<figure>
			<Image
				src="images/snippet.png"
				alt="Generated clamp code snippet with sample values set. Values can be copied by clicking on a button or manually selecting and copying the value."
			/>
			<figcaption>
				The code snippet can be copied by clicking the button or by selecting the text and copying
				manually
			</figcaption>
		</figure>
		<h3>Graph view</h3>
		<p>
			Graph view can give you a general overview of fluid typography behavior. By hovering over the
			graph you can inspect individual values on specific screen sizes.
		</p>
		<figure>
			<Image
				src="images/graph-increase.png"
				alt="Graphic overview of fluid typography behavior for default settings"
			/>
			<figcaption>
				A high-level overview of fluid typography behavior. Fluid value starts increasing from
				min-size to max size at around 400px of the viewport width and it stops at a maximum value
				at around 1000px,
			</figcaption>
		</figure>
		<p>
			For a more detailed overview or tracking specific screen sizes, you can use the table view.
		</p>
		<h3>Table view</h3>

		<p>
			A table view can give you a more detailed overview of fluid font sizes for specific viewport
			sizes. Viewport sizes can be easily added using the adjacent input. Likewise, individual
			values can be removed from the list by clicking the remove button for a specific value.
		</p>

		<figure>
			<Image
				src="images/table.png"
				alt="Table view of fluid behavior for specific set of screen sizes."
			/>
			<figcaption>
				Minimum, maximum, and fluid values are indicated in the table and values can be sorted by
				screen size in ascending or descending order.
			</figcaption>
		</figure>
	</section>

	<section>
		<h2>Issues and contribution</h2>
		<p>
			Found any bugs or have a suggestion? Feel free to open an issue in
			<a
				href="https://github.com/codeAdrian/modern-fluid-typography-editor"
				target="_blank"
				rel="noopener noreferrer"
			>
				project's GitHub repository
			</a>.
		</p>
		<p>
			Feel free to contribute code to the project by
			<a
				href="https://github.com/codeAdrian/modern-fluid-typography-editor"
				target="_blank"
				rel="noopener noreferrer"
			>
				forking the source code
			</a>. Please consult the "Issues" tab or contact me directly as unsolicited code contributions
			may be rejected if they're not necessary or if they harm code quality, performance or
			functionality.
		</p>
	</section>
</main>

<style>
	main {
		@media (--mq-tablet-min) {
			font-size: var(--font-size-medium);
		}
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
		margin-bottom: var(--spacing-3);
		border-bottom: 4px solid var(--color-secondary-faded);
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

	h2 {
		font-size: var(--font-size-large);
		margin-bottom: var(--spacing-1);
	}

	h3 {
		font-size: var(--font-size-medium);
		margin-top: var(--spacing-1);
		margin-bottom: var(--spacing-n1);
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

	a:hover,
	a:active,
	a:focus {
		text-decoration: underline;
	}

	pre {
		display: inline-block;
		border: 2px solid var(--color-secondary);
		background-color: var(--color-secondary-faded);
		border-radius: var(--spacing-n2);
		padding: var(--spacing-1);
		font-weight: var(--font-weight-bold);
		margin-bottom: var(--spacing-n1);
		overflow: auto;
		max-width: 100%;
	}

	section {
		max-width: 820px;
		margin: 0 auto;
		margin-bottom: var(--spacing-2);
		padding: 0 var(--spacing-n1);

		@media (--mq-tablet-min) {
			padding: 0 var(--spacing-2);
		}
	}

	p + p {
		margin-top: var(--spacing-1);
	}

	figure {
		display: block;
		margin: var(--spacing-2) 0;

		@media (--mq-desktop-min) {
			margin: var(--spacing-2) calc(-1 * var(--spacing-4));
			width: calc(100% + 2 * var(--spacing-4));
		}
	}

	figcaption {
		text-align: center;
		margin-top: var(--spacing-n1);
		font-size: var(--font-size-small);
		@media (--mq-tablet-min) {
			font-size: var(--font-size-base);
		}
		@media (--mq-desktop-min) {
			padding: 0 var(--spacing-3);
		}
	}

	figure :global(img) {
		max-width: 100%;
		margin: 0 auto;
		display: block;
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
