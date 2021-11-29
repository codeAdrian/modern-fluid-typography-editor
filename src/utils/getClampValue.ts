export const getClampValue = ([min, fluid, relative, max]: [number, number, number, number]) =>
	`clamp(${min}rem, ${fluid}vw + ${relative}rem, ${max}rem);`;
