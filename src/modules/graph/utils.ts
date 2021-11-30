export const getScalesConfig = (y: { min: number; max: number; grid?: any }) => {
	y.min = x.min + 10;
	y.max = x.max + 10;
	y.grid = { display: false };

	return {
		scales: {
			x: { min: 200, max: 2000 },
			y
		}
	};
};
