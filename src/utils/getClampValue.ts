import { setToPrecision } from './setToPrecision';

const getDynamicValue = (fluid: number, relative: number) => {
	if (relative === 0 || !relative) {
		return `${fluid}vw`;
	}

	return relative < 0 ? `${fluid}vw - ${-1 * relative}rem` : `${fluid}vw + ${relative}rem`;
};

export const getClampValue = ([min, fluid, relative, max]: [number, number, number, number]) =>
	`clamp(${setToPrecision(min, 3)}rem, ${getDynamicValue(fluid, relative)}, ${setToPrecision(
		max,
		3
	)}rem);`;
