<script>
	import { trackers } from './store';
	import { generateUniqueId } from './utils';

	export let onAdd;

	let screenWidth;

	const handleSubmit = (e) => {
		e.preventDefault();
		const id = generateUniqueId();
		if (screenWidth <= 0) {
			return;
		}

		trackers.update((v) => [...v, { id, width: screenWidth }]);
		onAdd();
	};
</script>

<tr class="form">
	<td>
		<form on:submit={handleSubmit}>
			<label class="visually-hidden form__label" for="track-screen-width"
				>Add screen value to track</label
			>
			<input id="track-screen-width" type="number" min={0} required bind:value={screenWidth} />
			<button type="submit">Add</button>
		</form>
	</td>
	<td />
	<td />
	<td />
</tr>

<style>
	.form {
		background-color: var(--color-secondary-faded);
		padding: var(--spacing-1);
		border-radius: var(--spacing-n1);
	}

	.form__label {
		font-family: var(--font-family-primary);
	}
	.visually-hidden {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
</style>
