import { breakPoints } from './convertClassName.js';

export const getBreakPoint = (width) => {
	// width = Math.round(width);
	//	values from bootstrap: http://getbootstrap.com/css/#grid
	if (width >= 1200) {
		return breakPoints[3];
	}
	if (width < 1200 && width >= 992) {
		return breakPoints[2];
	}
	if (width < 992 && width >= 768) {
		return breakPoints[1];
	}
	if (width < 768) {
		return breakPoints[0];
	}
};
