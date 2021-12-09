import { browser } from '$app/env';

export const parseQueryString = (item: string) => {
	if (!browser) {
		return;
	}

	const searchParams = new URLSearchParams(window.location.search);

	const result = parseInt(searchParams.get(item));

	if (isNaN(result)) {
		return;
	}

	return searchParams.get(item);
};
