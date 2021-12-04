<script>
	import { trackers } from './store';
	import { generateUniqueId } from './utils';

	let screenWidth;
	let form;

	const handleSubmit = (e) => {
		e.preventDefault();
		const id = generateUniqueId();
		if (screenWidth <= 0) {
			return;
		}

		trackers.update((v) => [...v, { id, width: screenWidth }]);
		form.reset();
	};
</script>

<div>
	<label class="form__label" for="track-screen-width">Add screen value to track</label>
</div>
<form class="form" bind:this={form} on:submit={handleSubmit}>
	<button class="form__button" type="submit"><i class="fa-solid fa-plus" /></button>
	<input
		class="form__input"
		id="track-screen-width"
		type="number"
		min={0}
		required
		bind:value={screenWidth}
	/>
	<span class="form__unit">px</span>
</form>

<style>
	.form {
		border-radius: var(--spacing-n2);
		border: 2px solid var(--color-secondary);
		display: inline-flex;
		background-color: var(--color-secondary-faded);
		margin-bottom: var(--spacing-1);
	}

	.form__label {
		font-family: var(--font-family-primary);
		margin-bottom: var(--spacing-n2);
		display: inline-block;
	}

	.form__input,
	.form__button,
	.form__unit {
		background-color: transparent;
		border-width: 0;
		padding: var(--spacing-n1) var(--spacing-n1);
		line-height: 1;
	}

	.form__input {
		font-weight: var(--font-weight-bold);
		color: var(--color-gray-light);
		outline: 0;
	}

	.form__button {
		color: var(--color-secondary);
		font-size: var(--font-size-medium);
		color: var(--color-secondary);
		border-right: 2px solid var(--color-secondary);
	}

	.form__unit {
		font-weight: var(--font-weight-bold);
		color: var(--color-secondary);
		border-left: 2px solid var(--color-secondary);
		line-height: 1.5;
		padding: var(--spacing-n1);
	}
</style>
