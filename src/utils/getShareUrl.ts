export const getShareUrl = ([rootFontSize, min, fluid, relative, max]: [
	number,
	number,
	number,
	number,
	number
]) =>
	`https://modern-fluid-typography.vercel.app?rootFontSize=${rootFontSize}&minSize=${min}&fluidSize=${fluid}&relativeSize=${relative}&maxSize=${max}`;
