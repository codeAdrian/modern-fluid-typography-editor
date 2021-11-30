export const setToPrecision = (num, decimals) =>
	Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
