import { clampRange } from 'src/utils/clampRange';

export const generateUniqueId = () => Math.floor(Math.random() * Date.now());

export const calculateSizeValue = (screenSize, fluidSize, relativeSizePx, minValue, maxValue) => {
	if (minValue >= maxValue) return minValue;

	return clampRange(
		Math.round((fluidSize / 100) * screenSize + relativeSizePx),
		minValue,
		maxValue
	);
};
