import { setToPrecision } from './setToPrecision';

export const getClampValue = ([min, fluid, relative, max]: [number, number, number, number]) =>
	`clamp(${setToPrecision(min, 3)}rem, ${fluid}vw + ${relative}rem, ${setToPrecision(max, 3)}rem);`;
